import * as z from "zod";

export const ReviewValidation = z.object({
    buffetId: z.string(),
    title: z.string().min(1, "Cannot be empty"),
    description: z.string().optional(),
    rating: z.number().int().positive(),
});