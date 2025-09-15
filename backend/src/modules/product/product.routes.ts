import express from 'express';
import insertBulk from './handlers/product.insertBulk';
import getProducts from './handlers/product.getPRoducts';

const router = express.Router();

router.post('/bulkInsert', insertBulk);
router.get('/getProducts', getProducts);


export default router;
