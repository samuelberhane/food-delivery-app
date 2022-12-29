import { category } from "../category";
import { Category } from "./";

const Categories = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Menu <span className="text-yellow-700">Category</span>{" "}
      </h1>
      <div className="flex items-center justify-between mt-4">
        {category.map((item, index) => (
          <Category item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
