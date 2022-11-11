import mongoose from "mongoose"

const { Schema, model } = mongoose

const FruitSchema = new Schema({
    Class_Name: {
        type: String,
        required: true,
    },
    Fruit_Name: {
        type: String,
        required: true,
    },
    Image_Path: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default model("Fruit", FruitSchema)