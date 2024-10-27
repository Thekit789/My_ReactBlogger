import React from "react";
import { Search, ChevronDown } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <>
      <article className="w-max-full h-auto flex flex-col justify-around">
        <h1 className="text-2xl font-semibold pb-4 text-[#26231E]">
          Latest articles
        </h1>
        <div className="md:flex justify-between items-center md:rounded-2xl h-auto w-full p-4 bg-[#EFEEEB] ">
          <menu className="hidden md:h-12 md:flex justify-around items-center">
            {categories.map((menu, index) => (
              <button
                className="px-3.5 py-3 mr-3 transition-colors duration-500 rounded-xl text-base font-medium text-[#43403B] hover:subpixel-antialiased hover:bg-slate-100"
                key={index}
              >
                {menu}
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
          <menu className="pt-4 md:hidden">
            <h1 className="text-base font-medium text-[#75716B]">Category</h1>
            <div className="relative">
              <ChevronDown className="md:hidden absolute top-1/4 right-4 text-[#b3afa8]" />
              <button className="flex items-center min-w-full h-12 rounded-xl pr-3 pl-4 py-3 border text-base text-start font-medium text-[#afaead] bg-white">
                Highlight
              </button>
            </div>
          </menu>
        </div>
      </article>
      <></>
      <article className="md:grid-cols-2 md:gap-6 grid grid-cols-1 gap-12 pt-6 pb-20 bg-slate-50">
        {blogPosts.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </article>
    </>
  );
}

function BlogCard({ item }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <a href="#" className="relative h-[212px] sm:h-[360px]">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={item.image}
            alt={item.title}
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
              {item.category}
            </span>
          </div>
          <a href="#" className="no-underline">
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline text-[#26231E]">
              {item.title}
            </h2>
          </a>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 text-[#74726F]">
            {item.description}
          </p>
          <div className="flex items-center text-sm">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
              alt="Tomson P."
            />
            <span>{item.author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-[#74726F]">{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
