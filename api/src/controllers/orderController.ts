import { Request, Response } from "express";
import OrderSchema from "../models/Order";
import UserSchema from "../models/User";

export const createOrder = async (req: Request, res: Response) => {
    const { user, restaurant, products } = req.body;

    try {
        const order = await OrderSchema.create({ user, restaurant, products });
        const userJSON = await UserSchema.findById(user);
        userJSON?.orders.push(order._id);
        await userJSON?.save();
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
        await order.save();
        return res.status(200).json(order);
    } catch (error) {
        return res.status(500).json(error);
    }
}