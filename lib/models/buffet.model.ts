import mongoose, { Schema, InferSchemaType, Document } from "mongoose";
import Review from "./review.model";

const ImageSchema = new Schema({
    url: {
        type: String,
        required: true,
    }
});

// Generate a thumbnail URL by replacing the '/upload' segment of the original URL
ImageSchema.virtual('thumbnail').get(function (this: typeof Image & { url: string }) {

    // Return a smaller version of the image (150x200px)
    return this.url.replace('/upload', '/upload/c_fill,h_150,w_200');
});


// Options object to enable virtuals in toJSON
const options = { toJSON: { virtuals: true } };


const BuffetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    images: [ImageSchema],
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
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ]
}, options); // Apply the options to enable virtuals in toJSON


// Define the Buffet type
type Buffet = {
    name: string;
    images: { url: string; }[];
    location: string;
    description: string;
    price: number;
    reviews: Review['_id'][];
} & Document;

// Create the BuffetModel
const Buffet = mongoose.models.Buffet || mongoose.model<Buffet>("Buffet", BuffetSchema);

// Export both the buffet type and buffet model as Buffet
export default Buffet;