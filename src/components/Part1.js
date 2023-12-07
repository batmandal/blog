"use client";
import { getData } from "@/utils/getData";
import { useState, useEffect } from "react";
import { Loader } from "@/components/Loader";

export function Page1(props) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(3);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data =
          await getData(`https://dev.to/api/articles?per_page=${pages}
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
    <div className="">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div>
          <div className="flex">
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
          <div className="flex justify-end gap-[9px]">
            <button className="border border-solid border-gray-400 rounded-md py-[10px] px-[13px]">{`<`}</button>
            <button className="border border-solid border-gray-400 rounded-md py-[10px] px-[13px]">{`>`}</button>
          </div>
        </div>
      )}
    </div>
  );
}
export function TopBlog(props) {
  return (
    <div>
      <div>
        <img src={props.pic} />
      </div>
      <div>
        <div>
          <span>{props.category}</span>
          <p>{props.title}</p>
        </div>
        <p>{props.date}</p>
      </div>
    </div>
  );
}
