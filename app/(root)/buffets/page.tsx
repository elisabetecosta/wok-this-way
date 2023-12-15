"use client";

import { useEffect, useState } from "react";

import Buffet from "@/lib/models/buffet.model";

import { getBuffets } from "@/lib/actions/buffet.actions";
import Card from "@/components/ui/card";


export default function BuffetsPage() {

  const [buffets, setBuffets] = useState<Buffet[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    async function fetchBuffets() {

      const buffets = await getBuffets();
      setBuffets(buffets);
      setLoading(false);
    };

    fetchBuffets();

  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <main className="flex flex-col items-center md:h-full">
      <div className="w-full">
        {/* MAPBOX */}
      </div>

      <div className="w-full">
        <h1 className="mt-10 text-center text-3xl font-bold text-gray-900 dark:text-white">All Buffets</h1>

        <div className="flex justify-center gap-8 m-10 flex-wrap">
          {buffets && buffets.length ? (
            buffets.map((buffet) => (
              <div key={buffet._id}>
                <Card buffet={buffet} />
              </div>
            ))
          ) : <h2>No buffets found</h2>}
        </div>
      </div>
    </main>
  );
};