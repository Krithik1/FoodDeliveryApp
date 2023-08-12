import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/index';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const MONGO_URI: string = process.env.MONGO_URI!;

app.use(express.json());
app.use(cors());
app.use("/api", router);

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});