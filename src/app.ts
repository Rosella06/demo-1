import express,{ Application } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes";
import prisma from "./configs/prisma.config";
import { globalErrorHanlder } from "./middlewares";

const app: Application = express();

dotenv.config();
const port: number = parseInt(process.env.PORT as string, 10) || 8080;
//middleware 
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan("dev"));

//route 12334356758
app.use('/api', routes);
app.use(globalErrorHanlder);

app.listen(port, () => {
  console.log(`Start server in port ${port}`);
});