import mongoose from "mongoose";

const buffetSchema = new mongoose.Schema({
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

const Buffet = mongoose.models.Buffet || mongoose.model("Buffet", buffetSchema);

export default Buffet;