import mongoose from "mongoose";

import { connectToDB } from "../lib/mongoose";
import Buffet from "../lib/models/buffet.model";

import locations from "./locations";
import names from "./names";


// Connect to mongo database
connectToDB();


// Get a random element from an array
const sample = (array: string[]) => array[Math.floor(Math.random() * array.length)];


// Seed the database with random data
const seedDB = async () => {

  // Delete all existing records in the 'Buffet' collection
  await Buffet.deleteMany({});

  // Generate 15 random buffet entries
  for (let i = 0; i < 15; i++) {

    // Generate a random index between 0 and 7 to choose a city
    const randomIndex = Math.floor(Math.random() * 8);

    // Generate a random price between 0 and 4
    const price = Math.floor(Math.random() * 5);

    // Create a new Buffet document with random data
    const buffet = new Buffet({
      location: `${locations[randomIndex].city}, ${locations[randomIndex].district}`,
      name: `${sample(names)}`,
      description:
        "This is a random description of a random chinese restaurant that will later be changed.",
      price: price,
      images: [
        {
            url: 'https://res.cloudinary.com/dh9isfyyf/image/upload/v1685032691/Wok%20This%20Way%20-%20Default%20Images/wok.cover_ucisey.jpg',
            filename: 'Wok This Way - Default Images/wok.cover_ucisey'    
        }
    ]
    });

    // Save the buffet document to the database
    await buffet.save();
  }
};


// Call the seedDB function to populate the database with random data
seedDB().then(() =>

  // Once the seeding is complete, close the database connection
  mongoose.connection.close()
);