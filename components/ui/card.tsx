import Link from "next/link";
import Image from "next/image";

import Buffet from "@/lib/models/buffet.model";

import RatingDisplay from "./rating-display";

interface CardProps {
    buffet: Buffet;
};


const Card: React.FC<CardProps> = ({ buffet }) => {

    return (

        <Link href={`/buffets/${buffet._id}`}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-700 hover:scale-105 hover:cursor-pointer">
                <div className="relative block h-44 w-[320px] overflow-hidden rounded-x">
                    <Image
                        fill
                        src={buffet.images[0].url}
                        alt="Buffet Image"
                        className="object-cover object-center rounded-t-lg"
                    />
                </div>
                <div className="px-5 pb-5">
                    <div className="flex items-center justify-between mt-2">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {buffet.name}
                        </h5>
                        <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <RatingDisplay rating={5} />
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                5.0
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white font-medium text-sm">
                            {buffet.location}
                        </span>
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            {buffet.price}€
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;