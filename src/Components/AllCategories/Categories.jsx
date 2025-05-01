import React, { use } from "react";
import { NavLink } from "react-router";
const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const data = use(CategoryPromise);
  return (
    <div>
      <h1 className="font-bold">All categories({data.length})</h1>
      <div className="grid grid-cols-1 mt-5 gap-5 ">
        {data.map((category) => (
          <NavLink
            to={`/categories/${category.id}`}
            key={category.id}
            className={"btn bg-base-100 hover:bg-base-200 border-0 text-accent"}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
