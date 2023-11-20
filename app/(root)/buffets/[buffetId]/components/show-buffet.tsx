"use client";

interface ShowBuffetProps {
    buffet: {
        name: string;
        location: string;
        price: number;
        description: string;
    };
}


const ShowBuffet: React.FC<ShowBuffetProps> = ({ buffet }) => {

    return (

        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                        {buffet.name}
                    </h1>

                    <p className="text-sm">{buffet.location}</p>
                </div>

                <p className="text-lg font-bold">{buffet.price} €</p>
            </div>

            <div className="mt-4">
                <div className="prose max-w-xl">
                    <p>{buffet.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ShowBuffet;