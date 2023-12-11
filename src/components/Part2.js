"use client";
import { getData } from "@/utils/getData";
import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";

export function Trending(params) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(4);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data =
          await getData(`https://dev.to/api/articles?top=4&per_page=${pages}&page=7
        `);
        console.log(data);
        setBlogs(data);
      } catch (err) {
        setError("Error, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div className="mt-[100px] max-w-[1215px] m-auto">
          <h2 className="font-bold text-2xl mb-[30px]">Trending</h2>
          <div className="grid grid-cols-4 gap-[24px]  ">
            {blogs.map((blog) => {
              return (
                <a href={`/blogs/${blog.id}`} key={blog.id}>
                  <Trend
                    title={blog.title}
                    pic={blog.cover_image}
                    category={blog["type_of"]}
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export function Trend(props) {
  return (
    <div className="grid items-end  relative rounded-xl grow aspect-square overflow-hidden">
      <img className="bg-cover absolute w-full h-full" src={props.pic}></img>

      <div className="z-10 absolute p-[28px] grid gap-[16px]">
        <p className="w-fit h-fit px-[10px] py-[4px] text-white font-medium text-xs bg-[#4B6BFB] rounded-md">
          {props.category}
        </p>
        <p className="font-semibold text-lg text-white">{props.title}</p>
      </div>
    </div>
  );
}
