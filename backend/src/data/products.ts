import { IProduct } from "../modules/product/product.model";

const products: Omit<IProduct, "_id">[] = [
  { name: "Laptop", price: 1200, image: "https://via.placeholder.com/150" },
  { name: "Headphones", price: 200, image: "https://via.placeholder.com/150" },
  { name: "Keyboard", price: 100, image: "https://via.placeholder.com/150" }
];

export default products;
