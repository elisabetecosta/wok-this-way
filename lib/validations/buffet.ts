import * as z from "zod";

export const BuffetValidation = z.object({
    name: z.string().min(1, "Cannot be empty"),
    location: z.string().min(1, "Cannot be empty"),
    description: z.string().min(1, "Cannot be empty"),
    price: z.coerce.number().positive().min(1, "Cannot be empty"),
});