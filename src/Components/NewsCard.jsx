

import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

export default function NewsCard({ news }) {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
  } = news;
  const navigate = useNavigate()
  const handleReadMore = ()=> {
       navigate(`/details/${news.id}`);
          window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden "> 
      {/* Author */}
      <div className="flex items-center justify-between p-4 bg-base-200 mb-2">
        <div className="flex items-center gap-3 ">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg font-bold leading-snug">
        {title}
      </h2>

      {/* Image */}
      <div className="p-4">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full h-60 object-cover"
        />
      </div>

      {/* Details */}
      <p className="px-4 text-sm text-gray-600">
        {details.slice(0, 160)}...
        <span onClick={handleReadMore} className="text-red-500 font-semibold cursor-pointer ml-1">
          Read More
        </span>
      </p>

      {/* Tags */}
      <div className="px-4 mt-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-2 py-1 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-4 mt-2 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(rating?.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm ml-1">
            {rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
