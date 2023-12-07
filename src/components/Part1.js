"use client";
import { getData } from "@/utils/getData";
import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";

export function Page1(props) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(3);
  const [indexCarousel, setIndexCarousel] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const [onTransition, setOnTransition] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data =
          await getData(`https://dev.to/api/articles?top3&per_page=${pages}&page=4
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

  // function right() {
  //   return setIndexCarousel((prev) => prev + 1);
  // }
  // function left() {
  //   return setIndexCarousel((prev) => prev - 1);
  // }

  return (
    <div className="flex flex-col items-center">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div className="m-auto">
          <div className=" w-[1216px] h-[600px] overflow-hidden rounded-xl border-4 border-black border-solid">
            <div
              className="flex w-[600%]"
              onTransitionStart={() => {
                setOnTransition(true);
              }}
              onTransitionEnd={() => {
                if (indexCarousel === 5) {
                  return setIndexCarousel(2);
                }

                if (indexCarousel === 0) {
                  return setIndexCarousel(3);
                }
                setOnTransition(false);
                setWithTransition(false);
              }}
              style={{
                transform: `translateX(-${(indexCarousel * 100) / 6}%)`,
                transition: withTransition
                  ? `transform 0.4s ease-in-out`
                  : "none",
              }}
            >
              {blogs.map((blog) => {
                return (
                  <>
                    <TopBlog
                      pic={blog["cover_image"]}
                      title={blog.title}
                      date={blog["readable_publish_date"]}
                      category={blog["type_of"]}
                    />
                  </>
                );
              })}
              {blogs.map((blog) => {
                return (
                  <TopBlog
                    pic={blog["cover_image"]}
                    title={blog.title}
                    date={blog["readable_publish_date"]}
                    category={blog["type_of"]}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-end gap-[9px]">
            <button
              onClick={() => {
                if (onTransition) return;
                setIndexCarousel((prev) => prev - 1);
                setOnTransition(true);
                setWithTransition(true);
              }}
              className="border border-solid border-gray-400 rounded-md py-[10px] px-[13px]"
            >{`<`}</button>
            <button
              onClick={() => {
                if (onTransition) return;
                setIndexCarousel((prev) => prev + 1);
                setOnTransition(true);
                setWithTransition(true);
              }}
              className="border border-solid border-gray-400 rounded-md py-[10px] px-[13px]"
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
      <div className="z-10 border-4 border-black border-solid text-red-900 bg-white mx-[11px] my-[13px] rounded-xl w-[50%] h-[50%] absolute">
        <div>
          <span>{props.category}</span>
          <p>{props.title}</p>
        </div>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
