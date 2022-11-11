import { Router } from "express"
import createError from "http-errors"
import FruitModel from "./schema.js"

const FruitRouter = Router()

FruitRouter.get("/", async(req, res, next) => {
    try {
        const fruits = await FruitModel.find()
        res.send(fruits)

    } catch (error) {
        console.log(error)
        next(error)
    }
})

FruitRouter.get("/:id", async(req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
})

FruitRouter.post("/", async(req, res, next) => {
    try {} catch (error) {
        next(error)
    }
})

FruitRouter.put("/:id", async(req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
})

FruitRouter.delete("/:id", async(req, res, next) => {
    try {} catch (error) {
        next(error)
    }
})

export default FruitRouter