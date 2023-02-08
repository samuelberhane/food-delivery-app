import { FaCommentAlt } from "react-icons/fa";
import Image from "next/legacy/image";

const Review = ({ review }) => {
  const { image, name, text } = review;
  return (
    <div className="flex justify-center px-8 sm:px-2 mb-4">
      <div className="shadow-lg border-2 mb-4 rounded-xl">
        <FaCommentAlt className="text-xl text-yellow-600 mb-2 m-2" />
        <div className="flex flex-col justify-between items-center h-[95%]">
          <p className="px-2">{text}</p>
          <div className="bg-yellow-600 w-full flex flex-col items-center userContainer text-white">
            <Image
              src={image}
              alt="user"
              height={80}
              width={80}
              className="rounded-full userImage"
            />
            <p className="font-bold mt-2">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
