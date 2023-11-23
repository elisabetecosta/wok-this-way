import { getBuffet } from "@/lib/actions/buffet.actions";

import ShowBuffet from "./components/show-buffet";


export default async function ShowPage({ params }: { params: { buffetId: string } }) {

  const buffet = await getBuffet(params.buffetId);


  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">

        {buffet ? (
          <ShowBuffet buffet={buffet} />
        ) : (
          <h1>Buffet was not found</h1>
        )}

      </div>
    </section>
  );
}