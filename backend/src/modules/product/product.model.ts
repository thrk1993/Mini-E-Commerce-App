import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct {
    name: string;
    price: number;
    image: string;
    description?: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, requred: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String }
});

export default mongoose.model<IProduct>('Product', productSchema);
