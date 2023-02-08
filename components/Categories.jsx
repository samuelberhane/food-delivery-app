import { category } from "../category";
import { Category } from "./";

const Categories = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Menu <span className="text-yellow-700">Category</span>
      </h1>
      <div className="grid grid-cols-6 gap-1 md:gap-3 lg:gap-5 mt-2">
        {category.map((item, index) => (
          <Category item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
