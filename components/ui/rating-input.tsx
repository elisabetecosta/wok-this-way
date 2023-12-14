import Star from "./star";

interface Props {
  setRating: React.Dispatch<React.SetStateAction<number>>;
  rating: number;
};

const RatingInput = ({ setRating, rating }: Props) => {

  return (
    <div className="flex h-[42px] items-center gap-3 pl-3">
      <div onClick={() => setRating(1)}>
        <Star
          textSize="h-5 w-5"
          textColor={`scale-[1.7] cursor-pointer transition ${rating >= 1 ? "text-yellow-400 hover:text-yellow-300" : "text-gray-300 hover:text-gray-200"
            }`}
        />
      </div>
      <div onClick={() => setRating(2)}>
        <Star
          textSize="h-5 w-5"
          textColor={`scale-[1.7] cursor-pointer transition ${rating >= 2 ? "text-yellow-400 hover:text-yellow-300" : "text-gray-300 hover:text-gray-200"
            }`}
        />
      </div>
      <div onClick={() => setRating(3)}>
        <Star
          textSize="h-5 w-5"
          textColor={`scale-[1.7] cursor-pointer transition ${rating >= 3 ? "text-yellow-400 hover:text-yellow-300" : "text-gray-300 hover:text-gray-200"
            }`}
        />
      </div>
      <div onClick={() => setRating(4)}>
        <Star
          textSize="h-5 w-5"
          textColor={`scale-[1.7] cursor-pointer transition ${rating >= 4 ? "text-yellow-400 hover:text-yellow-300" : "text-gray-300 hover:text-gray-200"
            }`}
        />
      </div>
      <div onClick={() => setRating(5)}>
        <Star
          textSize="h-5 w-5"
          textColor={`scale-[1.7] cursor-pointer transition ${rating >= 5 ? "text-yellow-400 hover:text-yellow-300" : "text-gray-300 hover:text-gray-200"
            }`}
        />
      </div>
    </div>
  );
};

export default RatingInput;