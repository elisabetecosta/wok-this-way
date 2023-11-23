"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Buffet from "@/lib/models/buffet.model";

import { getBuffets } from "@/lib/actions/buffet.actions";


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
    <main className="p-4">
      <h1>All Buffets</h1>
      <div className="mb-10">
        {buffets && buffets.length ? (
          buffets.map((buffet) => (
            <div key={buffet._id}>
              <Link href={`/buffets/${buffet._id}`}>
                <h2 className="text-3xl">{buffet.name}</h2>
              </Link>
            </div>
          ))
        ) : <h2>No buffets found</h2>}
      </div>
    </main>
  );
};