import Link from "next/link";

import { fetchBuffets } from "@/lib/actions/buffet.actions";


export default async function BuffetsPage() {

  const buffets = await fetchBuffets();


  return (
    <main className="p-4">
       <h1>All Buffets</h1> 
      <div className="mb-10">
        {buffets.length ? (
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