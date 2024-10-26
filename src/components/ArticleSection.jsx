import React from "react";
import { Search, ChevronDown } from "lucide-react";

export function ArticleSection() {
  return (
    <article className="w-max-full h-auto flex flex-col justify-around">
      <h1 className="text-2xl font-semibold pb-4 text-[#26231E]">
        Latest articles
      </h1>
      <div className="md:flex justify-between items-center md:rounded-2xl h-auto w-full p-4 bg-[#EFEEEB] ">
        <menu className="hidden md:h-12 md:flex justify-around items-center">
          <button className="px-3.5 py-3 mr-3 rounded-xl text-base font-medium text-[#43403B] bg-[#DAD6D1]">
            Highlight
          </button>
          <button className="px-3.5 py-3 mr-3 rounded-xl text-base font-medium text-[#75716B] hover:bg-slate-100">
            Cat
          </button>
          <button className="px-3.5 py-3 mr-3 rounded-xl text-base font-medium text-[#75716B]  hover:bg-slate-100">
            Inspiration
          </button>
          <button className="px-3.5 py-3 mr-3 rounded-xl text-base font-medium text-[#75716B]  hover:bg-slate-100">
            Ganeral
          </button>
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
  );
}
