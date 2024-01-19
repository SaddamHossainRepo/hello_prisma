import { Request, Response } from "express";
import { categoryservice } from "./category.service";

const insertIntoDB =async (req:Request, res: Response) => {
    try {
        const result = await categoryservice.insertIntoDB(req.body)
        res.send({
            success: true,
            message: 'category created successfully',
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

export const categoryController = {
    insertIntoDB
}