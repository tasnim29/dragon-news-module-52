import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    details,
    author,
    image_url,
    tags,
    rating,
    total_view,
    category_id,
  } = news;

  return (
    <div className="bg-base-100 shadow-xl rounded-lg p-6 border border-blue-200 ">
      <figure>
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full max-h-[400px] object-cover"
        />
      </figure>

      <div className="mt-5 space-y-4">
        <h2 className="text-2xl font-bold text-primary">{title}</h2>

        <p className="text-sm text-gray-500">
          {new Date(author?.published_date).toDateString()} | Author:{" "}
          <span className="font-semibold">{author?.name}</span>
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Views: {total_view}</span>
          <span className="badge badge-info">Rating: {rating?.number} ⭐</span>
          {rating?.badge && (
            <span className="badge badge-success uppercase">
              {rating.badge}
            </span>
          )}
        </div>

        <div className="prose max-w-none text-gray-800">
          <p>{details}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags?.map((tag, index) => (
            <span key={index} className="badge badge-outline text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to={`/categories/${category_id}`}
            className="btn btn-error text-white"
          >
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
