import { Request, Response } from "express";
import OrderSchema from "../models/Order";

export const createOrder = async (req: Request, res: Response) => {
    const { user, restaurant, products } = req.body;

    try {
        const order = await OrderSchema.create({ user, restaurant, products });
        return res.status(201).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getOrder = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const order = await OrderSchema.findById(id);
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const orderOrder = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const order = await OrderSchema.findById(id);
        if (!order) return res.status(404).json({ message: "Order not found" })
        order.status = true;
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
}