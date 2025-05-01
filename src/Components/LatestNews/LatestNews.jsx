import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className=" flex gap-5 bg-base-300 p-3 items-center rounded-xl">
      <div className="bg-secondary py-2 px-3">
        <h1 className="text-base-200">Latest</h1>
      </div>
      <div>
        <Marquee className="flex gap-5 " pauseOnHover={true}>
          <p className="font-bold">
            UCL Thriller: Barcelona 3-3 Inter as Lamine Yamal rescues draw in
            first leg!
          </p>
          <p className="font-bold">
            Shock exits: Messi's Inter Miami & Ronaldo's Al Nassr eliminated
            from continental tournaments!
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
