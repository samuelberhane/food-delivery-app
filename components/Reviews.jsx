import { reviews } from "../reviews";
import { Review } from "./";

const Reviews = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">
        Customers <span className="text-yellow-700">Review</span>
      </h1>
      <p className="text-center text-xl mt-4">
        What our customers are saying...
      </p>
      <div className="flex overflow-x-hidden gap-12 items-center justify-center mt-3 px-12">
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
