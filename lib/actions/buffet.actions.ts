"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "@/lib/mongoose";

import Buffet from "@/lib/models/buffet.model";

interface Params {
    name: string;
    location: string;
    description: string;
    price: number;
};


// Fetch all buffets
export async function fetchBuffets() {

    try {

        // Connect to mongo database
        connectToDB();

        const buffets = await Buffet.find({});

        return buffets;

    } catch (error: any) {
        throw new Error(`Failed to fetch buffets: ${error.message}`);
    }
}


// Fetch buffet by id
export async function fetchBuffet(buffetId: string) {

    try {

        // Connect to mongo database
        connectToDB();

        const buffet = await JSON.parse(JSON.stringify(await Buffet.findById(buffetId)));
        return buffet;

    } catch (error: any) {
        throw new Error(`Failed to fetch buffet: ${error.message}`);
    }
}


// Create a new buffet
export async function createBuffet({
    name,
    location,
    description,
    price
}: Params
) {

    try {

        // Connect to mongo database
        connectToDB();

        const buffetData = {
            name,
            location,
            description,
            price
        };

        const buffet = new Buffet(buffetData);
        await buffet.save();

        const buffetId = buffet._id.toString();

        return buffetId;

    } catch (error: any) {
        throw new Error(`Failed to create buffet: ${error.message}`);
    }
}


// Update buffet by id
export async function updateBuffet(
    buffetId: string,
    {
        name,
        location,
        description,
        price
    }: Params
) {

    try {

        // Connect to mongo database
        connectToDB();

        const buffetData = {
            name,
            location,
            description,
            price
        };

        await Buffet.findByIdAndUpdate(buffetId, { ...buffetData });

        revalidatePath(`/buffets/${buffetId}`);

        return;

    } catch (error: any) {
        throw new Error(`Failed to create buffet: ${error.message}`);
    }
}


// Delete buffet by id
export async function deleteBuffet(buffetId: string): Promise<void> {

    try {

        // Connect to mongo database
        connectToDB();

        // Find the buffet to be deleted
        const buffet = await Buffet.findByIdAndDelete(buffetId);

        if (!buffet) throw new Error("Buffet not found");

        revalidatePath("/buffets");
        
        return;

    } catch (error: any) {
        throw new Error(`Failed to delete buffet: ${error.message}`);
    }
}