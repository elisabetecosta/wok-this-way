import * as z from "zod";

export const BuffetValidation = z.object({
    name: z.string().min(1, "Cannot be empty"),
    images: z.object({ url: z.string() }).array().min(1, "You need to upload at least 1 image"),
    location: z.string().min(1, "Cannot be empty"),
    description: z.string().min(1, "Cannot be empty"),
    price: z.coerce.number().positive().min(1, "Cannot be empty"),
});