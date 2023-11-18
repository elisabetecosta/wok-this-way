"use server";

import { connectToDB } from "@/lib/mongoose";

import Buffet from "@/lib/models/buffet.model";


// Fetch all buffets
export async function fetchBuffets() {

    try {

        connectToDB();

        const buffets = await Buffet.find({});

        return buffets;

    } catch (error: any) {
        throw new Error(`Failed to fetch buffets: ${error.message}`);
    }
}