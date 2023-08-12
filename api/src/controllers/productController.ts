import { Request, Response } from "express";
import ProductSchema from "../models/Product";

export const createProduct = async (req: Request, res: Response) => {
    const { name, description, price, restaurant } = req.body;

    try {
        const product = await ProductSchema.create({ name, description, price, restaurant });
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await ProductSchema.findById(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price, restaurant } = req.body;

    try {
        const product = await ProductSchema.findById(id);
        if (!product) return res.status(404).json({ message: "Product not found" })
        product.name = name;
        product.description = description;
        product.price = price;
        product.restaurant = restaurant;
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}