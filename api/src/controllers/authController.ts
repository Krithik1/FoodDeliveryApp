import { Request, Response } from "express";
import UserSchema from "../models/User";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password, street, city, state, postalCode, phone } = req.body;
  
      // Check if the user already exists
      const existingUser = await UserSchema.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const user = new UserSchema({
        firstName,
        lastName,
        email,
        passwordHash: hashedPassword, // Corrected field name
        address: {
          street,
          city,
          state,
          postalCode
        },
        phone
      });
  
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  };
  
  
  export const loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      const user = await UserSchema.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.passwordHash);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      res.status(200).json({ login: "Success" });
    } catch (error) {
      res.status(500).json({ error: 'Failed to login' });
    }
  };