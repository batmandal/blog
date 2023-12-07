"use client";
import { getData } from "@/utils/getData";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

export function Blog(params) {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(9);

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
  }, [pages]);

  function morePages() {
    setPages(pages + 3);
  }
  return (
    <div className="max-w-[1215px] py-[48px] m-auto">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div>
          <div className="flex flex-col gap-[32px]">
            <h2>All Blog Post</h2>
            <div className="flex justify-between">
              <div className="flex gap-[20px]">
                <a href="https://www.rfc-editor.org/rfc/rfc9110#HEAD">All</a>
                <a>Design</a>
                <a>Travel</a>
                <a>Fashion</a>
                <a>Technology</a>
                <a>Branding</a>
              </div>
              <a>View All</a>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
              {blogs.map((blog) => {
                return (
                  <Card
                    pic={blog["cover_image"]}
                    title={blog.title}
                    date={blog["readable_publish_date"]}
                    category={blog["type_of"]}
                  />
                );
              })}
            </div>
            <button
              className="px-[20px] py-[12px] text-[#696A75] border m-auto w-fit h-fit border-solid rounded-md border-[#696A754D] "
              onClick={morePages}
            >
              Load More...
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
