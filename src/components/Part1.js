"use client";
import { getData } from "@/utils/getData";
import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";

export function Page1(props) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(4);
  const [indexCarousel, setIndexCarousel] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [isOnTransition, setIsOnTransition] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data =
          await getData(`https://dev.to/api/articles?per_page=${pages}&top=4
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
    <div className="flex flex-col items-center">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div className="m-auto grid gap-[11px]">
          <div className=" w-[1216px] h-[600px] overflow-hidden rounded-xl ">
            <div
              className="flex w-[800%]"
              onTransitionStart={() => {
                setIsOnTransition(true);
              }}
              onTransitionEnd={() => {
                if (indexCarousel === 0) {
                  setIndexCarousel(4);
                  setWithTransition(false);
                }

                if (indexCarousel === 5) {
                  setIndexCarousel(1);
                  setWithTransition(false);
                }
                setIsOnTransition(false);
              }}
              style={{
                transform: `translateX(-${(indexCarousel * 100) / 8}%)`,
                transition: withTransition ? `400ms` : "none",
              }}
            >
              {blogs.map((blog) => {
                return (
                  <a href={`/blogs/${blog.id}`} key={blog.id}>
                    <TopBlog
                      pic={blog["cover_image"]}
                      title={blog.title}
                      date={blog["readable_publish_date"]}
                      category={blog["type_of"]}
                    />
                  </a>
                );
              })}
              {blogs.map((blog) => {
                return (
                  <a href={`/blogs/${blog.id}`} key={blog.id}>
                    <TopBlog
                      pic={blog["cover_image"]}
                      title={blog.title}
                      date={blog["readable_publish_date"]}
                      category={blog["type_of"]}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end gap-[9px]">
            <button
              onClick={() => {
                if (isOnTransition) return;
                setIndexCarousel((prev) => prev - 1);
                setIsOnTransition(true);
                setWithTransition(true);
              }}
              className="border border-solid border-gray-400 rounded-md py-[10px] px-[16px]"
            >{`<`}</button>
            <button
              onClick={() => {
                if (isOnTransition) return;
                setIndexCarousel((prev) => prev + 1);
                setIsOnTransition(true);
                setWithTransition(true);
              }}
              className="border border-solid border-gray-400 rounded-md py-[10px] px-[16px]"
            >{`>`}</button>
          </div>
        </div>
      )}
    </div>
  );
}
export function TopBlog(props) {
  return (
    <div className="relative flex flex-col justify-end">
      <div className="">
        <img className="w-full h-[600px] bg-cover" src={props.pic} />
      </div>
      <div className="z-10 p-[40px] grid gap-[24px] bg-white mx-[11px] my-[13px] rounded-xl w-[50%] h-fit absolute">
        <div className="grid gap-[16px] ">
          <span className="rounded-md w-fit h-fit bg-[#4B6BFB] px-[10px] py-[4px] text-white">
            {props.category}
          </span>
          <p className="text-4xl font-semibold">{props.title}</p>
        </div>
        <p className="font-normal text-[#97989F] text-base">{props.date}</p>
      </div>
    </div>
  );
}
