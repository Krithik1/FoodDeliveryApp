import { Request, Response } from "express";
import RestaurantSchema from "../models/Restaurant";

export const createRestaurant = async (req: Request, res: Response) => {
    const { name, description, street, city, state, postalCode, phone, menu } = req.body;

    try {
        const restaurant = await RestaurantSchema.create({
            name,
            description,
            address: {
                street,
                city,
                state,
                postalCode
            },
            phone,
            menu
        });
        return res.status(201).json(restaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getRestaurant = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const restaurant = await RestaurantSchema.findById(id);
        return res.status(200).json(restaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getAllRestaurants = async (req: Request, res: Response) => {
    try {
        const restaurants = await RestaurantSchema.find();
        return res.status(200).json(restaurants);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const updateRestaurant = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, street, city, state, postalCode, phone, menu } = req.body;

    try {
        const restaurant = await RestaurantSchema.findByIdAndUpdate(
            id,
            {
                name,
                description,
                address: {
                    street,
                    city,
                    state,
                    postalCode
                },
                phone,
                menu
            },
            { new: true }
        );

        if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });

        return res.status(200).json(restaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
};