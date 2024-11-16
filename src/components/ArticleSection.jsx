import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import axios from "axios";
import loadingGif from "../assets/IMG/Loading.gif";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [isLoading, setIsLoading] = useState(true);
  const [blogPostData, setblogPostData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6;
  const [hasViewMore, setHasViewMore] = useState(true);

  const fetchPosts = async (page, limit) => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts?page=${page}&limit=${limit}`
      );
      if (page === 1) {
        setblogPostData(response.data.posts);
      } else {
        setblogPostData((prevData) => [...prevData, ...response.data.posts]);
      }
      setIsLoading(false);

      if (response.data.currentPage >= response.data.totalPages) {
        setHasViewMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts(1, limit);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchPosts(page, limit);
    }
  }, [page]);

  const loading = () => {
    return (
      <div className="w-max-full flex flex-col items-center justify-center py-12">
        <img
          className="md:size-24 size-10"
          src={loadingGif}
          alt="Description of the image"
        />
        <h1 className="md:text-2xl text-base text-[#504F4D] pt-2">
          Loading...
        </h1>
      </div>
    );
  };

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {isLoading ? loading() : null}
      <article className="w-max-full h-auto flex flex-col justify-around">
        <h1 className="text-2xl font-semibold pb-4 text-[#26231E]">
          Latest articles
        </h1>
        <div className="md:flex justify-between items-center md:rounded-2xl h-auto w-full p-4 bg-[#EFEEEB] ">
          <menu className="hidden md:h-12 md:flex justify-around items-center">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-3 mr-2 py-3 transition-colors duration-200 rounded-xl text-sm text-muted-foreground font-medium ${
                  category === item ? "bg-[#DAD6D1]" : "hover:bg-[#F5F5F4]"
                }`}
              >
                {item}
              </button>
            ))}
          </menu>
          <div className="w-full md:max-w-[360px] relative">
            <Search className="absolute top-1/4 right-4 text-[#b3afa8]" />
            <input
              type="text"
              placeholder="Search"
              className="min-w-full h-12 rounded-xl pr-3 pl-4 py-3 border text-base font-medium text-[#75716B]"
            />
          </div>
          <menu className="pt-4 w-full md:hidden">
            <div className="flex flex-col items-center justify-center rounded-xl h-12 bg-white">
              <Select
                value={category}
                onValueChange={(value) => setCategory(value)}
              >
                <SelectTrigger className="rounded-xl h-12 text-[#75716B]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl">
                  {categories.map((category, index) => (
                    <SelectItem className="mb-1" key={index} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </menu>
        </div>
      </article>
      <></>
      <article className="md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-12 pt-6 pb-20 bg-slate-50">
        {blogPostData.map((postData, id) => {
          const formattedDate = new Date(postData.date).toLocaleDateString(
            "en-GB",
            { day: "2-digit", month: "long", year: "numeric" }
          );
          return (
            <div className="flex flex-col gap-4" key={id}>
              <Link
                to={`/post/${postData.id}`}
                className="relative h-[212px] sm:h-[360px]"
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={postData.image}
                  alt={postData.title}
                />
              </Link>
              <div className="flex flex-col">
                <div className="flex">
                  <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                    {postData.category}
                  </span>
                </div>
                <Link to={`/post/${postData.id}`} className="no-underline">
                  <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline text-[#26231E]">
                    {postData.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 text-[#74726F]">
                  {postData.description}
                </p>
                <div className="flex items-center text-sm">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                    alt="Tomson P."
                  />
                  <span>{postData.author}</span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-[#74726F]">{formattedDate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </article>
      {hasViewMore && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleViewMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200"
          >
            View More
          </button>
        </div>
      )}
      ;
    </>
  );
}
