import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { loadRoutes } from './untils/routeLoader';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

// Load routes dynamically
loadRoutes(app);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI || '')
    .then(() => {
        console.log('Connected to Mongo DB');
        app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
