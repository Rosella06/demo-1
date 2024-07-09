import express,{ Application } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import prisma from "./configs/prisma.config";
import { globalErrorHanlder } from "./middlewares";

const app: Application = express();
require('dotenv').config();
dotenv.config();
const port: number = parseInt(process.env.PORT as string, 10) || 8001;

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan("dev"));

app.use('/api', routes);
app.use(globalErrorHanlder);

app.listen(port, () => {
  console.log(`HTTP server running at http://localhost:8001`);
});