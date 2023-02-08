import { reviews } from "../reviews";
import { Review } from "./";

const Reviews = () => {
  return (
    <div id="reviews" className="mt-4 lg:mt-2">
      <h1 className="text-3xl font-bold text-center">
        Customers <span className="text-yellow-700">Review</span>
      </h1>
      <p className="text-center text-xl mt-2">
        What our customers are saying...
      </p>
      <div className="grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2 justify-center mt-3">
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
