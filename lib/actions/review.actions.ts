"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "@/lib/mongoose";

import Buffet from "@/lib/models/buffet.model";
import Review from "@/lib/models/review.model";


interface Params {
    buffetId: string;
    title: string;
    description?: string;
    rating: number;
};

export async function createReview({
    buffetId,
    title,
    description,
    rating
}: Params
) {

    try {

        connectToDB();

        const reviewData = {
            title,
            description,
            rating
        };

        const review = new Review(reviewData);
        await review.save();

        await Buffet.findByIdAndUpdate(buffetId, {
            $push: { reviews: review._id },
        });

        revalidatePath(`/buffets/${buffetId}`);

    } catch (error: any) {
        throw new Error(`Failed to create review: ${error.message}`);
    }
}


export async function deleteReview(buffetId: string, reviewId: string): Promise<void> {

    try {

        connectToDB();

        // Remove the review ID from the reviews array of the buffet using the '$pull' operator
        await Buffet.findByIdAndUpdate(buffetId, { $pull: { reviews: reviewId } });

        // Delete the review from the database based on the provided ID
        await Review.findByIdAndDelete(reviewId);

        revalidatePath(`/buffets/${buffetId}`);
        return;

    } catch (error: any) {
        throw new Error(`Failed to delete review: ${error.message}`);
    }
}