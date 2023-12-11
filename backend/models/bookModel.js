import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps:true 
    }
)

export const Book = mongoose.model('Book', bookSchema)








