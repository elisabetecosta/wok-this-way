import Image from "next/image";
import { Trash } from "lucide-react";

import Review from "@/lib/models/review.model";
import { deleteReview } from "@/lib/actions/review.actions";

import { Button } from "@/components/ui/button";
import RatingDisplay from "@/components/ui/rating-display";

interface ShowReviewsProps {
  buffetId: string;
  reviews: Review[];
};


const ShowReviews: React.FC<ShowReviewsProps> = ({ buffetId, reviews }) => {

  return (
    <section>
      <div className="w-full p-8 border rounded-lg border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600">

        {reviews.map((review) => (

          <article key={review._id} className="mb-8 p-4 border rounded-lg border-gray-300 bg-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="flex justify-between">
              <div className="flex items-center mb-4">
                <Image
                  src=""
                  alt=""
                  className="w-10 h-10 me-4 rounded-full"
                />
                <div className="font-medium dark:text-white">
                  <p>Jese Leos</p>
                </div>
              </div>

              <div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => deleteReview(buffetId, review._id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
              <RatingDisplay rating={review.rating ?? 3} />

              <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">{review.title}</h3>
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed on <time dateTime="2017-03-03 19:00">March 3, 2017</time></p></footer>
            <p className="mb-3 text-gray-500 dark:text-gray-400">{review.description}</p>
            <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
          </article>

        ))}
      </div>
    </section>
  );
}

export default ShowReviews;