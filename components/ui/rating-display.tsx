import Star from "./star";

interface Props {
    rating: number;
};

const RatingDisplay = ({ rating }: Props) => {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <Star
            key={index}
            textSize="h-4 w-4"
            textColor={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
        />
    ));

    return <div className="flex">{stars}</div>;
};

export default RatingDisplay;