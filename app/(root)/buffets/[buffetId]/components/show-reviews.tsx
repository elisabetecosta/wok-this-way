import { Trash } from "lucide-react";

import Review from "@/lib/models/review.model";
import { deleteReview } from "@/lib/actions/review.actions";

import { Button } from "@/components/ui/button";

interface ShowReviewsProps {
  buffetId: string;
  reviews: Review[];
};


const ShowReviews: React.FC<ShowReviewsProps> = ({ buffetId, reviews }) => {

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">

        {reviews.map((review) => (
          <div key={review._id} className="flex">
            <div>
              <h1>{review.title}</h1>
              <p>{review.description}</p>
              <p>{review.rating}</p>
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
        ))}
      </div>
    </section>
  );
}

export default ShowReviews;