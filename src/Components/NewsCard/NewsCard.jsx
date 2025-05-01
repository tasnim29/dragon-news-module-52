import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { FcShare } from "react-icons/fc";
import { PiBookmarksFill } from "react-icons/pi";

const NewsCard = ({ news }) => {
  const { author, title, image_url, details, rating, total_view } = news;

  return (
    <div className=" rounded-md p-4 shadow-xl space-y-4">
      {/* Author Info & Share */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm text-xl">
            <PiBookmarksFill />
          </button>
          <button className="btn btn-ghost btn-sm text-xl">
            <FcShare />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="w-full max-h-[220px] object-cover rounded-md"
      />

      {/* Details (shortened version) */}
      <p className="text-gray-700 text-sm">
        {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        <span className="text-orange-500 font-semibold cursor-pointer">
          Read More
        </span>
      </p>

      {/* Footer with rating and views */}
      <div className="flex justify-between items-center">
        {/* Rating */}
        <div className="flex items-center text-orange-500 gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={
                i < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="text-black ml-1 font-semibold">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-600 gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
