import axios from "axios";
import { Product } from "./constant";

export async function getProducts(): Promise<Product[]> {
    const { data: products } = await axios.get("https://fakestoreapi.com/products");
    return products;
}