import express, { Router, Application } from 'express';
import path from 'path';
import fs from 'fs';

interface RouteModule {
    default: Router;
    routePath?: string;
}

/**
 * Dynamically loads all route files from modules directory
 * @param app Express application instance
 */
export const loadRoutes = (app: Application): void => {
    const modulesDir = path.join(__dirname, '../modules');

    try {
        // Check if modules directory exists
        if (!fs.existsSync(modulesDir)) {
            console.log('No modules directory found');
            return;
        }

        // Get all module directories
        const moduleDirs = fs
            .readdirSync(modulesDir, { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        console.log(`Found ${moduleDirs.length} modules:`, moduleDirs);

        // Load routes from each module
        for (const moduleName of moduleDirs) {
            const routeFile = path.join(modulesDir, moduleName, `${moduleName}.routes.ts`);

            if (fs.existsSync(routeFile)) {
                try {
                    // Dynamically import the route module
                    const routeModule: RouteModule = require(routeFile);

                    if (routeModule.default && typeof routeModule.default === 'function') {
                        // Use the module name as the base path, or use custom path if provided
                        const basePath = routeModule.routePath || `/api/${moduleName}`;

                        app.use(basePath, routeModule.default);
                        console.log(`✓ Loaded routes for ${moduleName} at ${basePath}`);
                    } else {
                        console.warn(`⚠ Route file ${routeFile} does not export a default router`);
                    }
                } catch (error) {
                    console.error(`✗ Error loading routes for ${moduleName}:`, error);
                }
            } else {
                console.log(`No route file found for module: ${moduleName}`);
            }
        }
    } catch (error) {
        console.log('Error in load module directories', error);
    }
};
