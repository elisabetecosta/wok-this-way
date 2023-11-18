import mongoose from "mongoose";

const buffetSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    location: String,
});

const Buffet = mongoose.models.Buffet || mongoose.model("Buffet", buffetSchema);

export default Buffet;