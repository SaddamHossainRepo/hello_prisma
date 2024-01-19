import express, { Application } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";
import { PrismaClient } from "@prisma/client";
import { categoryRoutes } from "./modules/category/category.route";
import { postRoutes } from "./modules/post/post.routes";
const prisma = new PrismaClient();

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/va/category", categoryRoutes);
app.use("/api/v1/post", postRoutes);


export default app;
