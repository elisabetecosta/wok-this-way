import mongoose, { Schema, InferSchemaType, Document } from "mongoose";

const ReviewSchema = new Schema({
    body: String,
    rating: Number
});

// Define the Review type using InferSchemaType
type Review = InferSchemaType<typeof ReviewSchema> & Document;

// Create the ReviewModel
const Review = mongoose.models.Review || mongoose.model<Review>("Review", ReviewSchema);

// Export both the review type and review model as Review
export default Review;