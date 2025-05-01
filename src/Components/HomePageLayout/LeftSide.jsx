import React, { Suspense } from "react";
import Categories from "../AllCategories/Categories";

const LeftSide = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftSide;
