import Image from "next/legacy/image";

const Category = ({ item }) => {
  const { image, text } = item;
  return (
    <div className="shadow-xl h-30 md:h-34 flex flex-col items-center justify-between rounded-md ">
      <p className="text-sm md:text-lg font-semibold text-blue-500 mb-1">
        {text}
      </p>
      <div className="bg-red-400 h-24 md:h-28 w-full relative border-t-2">
        <Image src={image} alt="categoryImg" layout="fill" />
      </div>
    </div>
  );
};

export default Category;
