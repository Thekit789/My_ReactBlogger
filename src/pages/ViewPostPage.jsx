import { useNavigate, useParams } from "react-router-dom";
import Markdown from "react-markdown";
import axios from "axios";
import { useState, useEffect } from "react";
import InteractionSection from "@/components/InteractionSection";

export default function ViewPostPage() {
  const param = useParams();
  const [viewPostData, setViewPostData] = useState([]);

  const fetchViewPosts = async () => {
    try {
      const response = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${param.postID}`
      );
      setViewPostData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchViewPosts();
  }, []);

  const formattedDate = new Date(viewPostData.date).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <section className="flex justify-center pt-6 pb-20 bg-slate-50">
      <div className="w-full flex flex-col gap-4">
        <img
          className="max-h-[586px] object-cover rounded-xl"
          src={viewPostData.image}
          alt={viewPostData.title}
        />
        <div className="flex justify-between w-full h-auto">
          <article className="flex flex-col max-w-[815px]">
            <div className="flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
                {viewPostData.category}
              </span>
              <span className="flex items-center px-3 mb-2 text-sm text-[#74726F]">
                {formattedDate}
              </span>
            </div>
            <a href="#" className="no-underline">
              <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline text-[#26231E]">
                {viewPostData.title}
              </h2>
            </a>
            <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3 text-[#74726F]">
              {viewPostData.description}
            </p>
            <div className="markdown">
              <Markdown>{viewPostData.content}</Markdown>
            </div>
          </article>
          <aside className="flex flex-col items-center w-80 h-96 rounded-2xl p-6 text-sm bg-[#EFEEEB]">
            <div className="flex h-16">
              <img
                className="size-16 object-fill rounded-full"
                src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
                alt="Tomson P."
              />
              <span className="px-3 flex flex-col justify-evenly ">
                <h6 className="text-sm font-medium -mb-2 text-[#75716B]">
                  Author
                </h6>
                <h5 className="text-2xl font-semibold -mb-2 text-[#43403B]">
                  {viewPostData.author}
                </h5>
              </span>
            </div>
            <div className="pt-3 w-11/12 border-b-2 border-solid border-t-zinc-900"></div>
          </aside>
        </div>
        <InteractionSection />
      </div>
    </section>
  );
}
