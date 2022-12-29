import Image from "next/image";

const Category = ({ item }) => {
  const { image, text } = item;
  return (
    <div className="shadow-xl h-36 flex flex-col items-center justify-between rounded-md ">
      <p className="text-lg font-bold text-blue-500 mb-1">{text}</p>
      <Image
        src={image}
        alt="category-img"
        width={40}
        height={40}
        className="rounded-md categoryImg"
      />
    </div>
  );
};

export default Category;
