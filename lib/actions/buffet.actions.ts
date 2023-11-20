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


// Fetch buffet by id
export async function fetchBuffet(buffetId: string) {

    try {

        connectToDB();

        const buffet = await JSON.parse(JSON.stringify(await Buffet.findById(buffetId)));
        return buffet;

    } catch (error: any) {
        throw new Error(`Failed to fetch buffet: ${error.message}`);
    }
}