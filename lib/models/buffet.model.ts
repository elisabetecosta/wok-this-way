import mongoose, { Schema, InferSchemaType, Document } from "mongoose";


const BuffetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});


// Define the Buffet type using InferSchemaType
export type Buffet = InferSchemaType<typeof BuffetSchema> & Document;

// Create the BuffetModel
export const BuffetModel = mongoose.models.Buffet || mongoose.model<Buffet>("Buffet", BuffetSchema);