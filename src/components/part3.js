"use client";
import { getData } from "@/utils/getData";
import { Card } from "@/components/Card";
import { useContext, useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import Link from "next/link";
import { valueContext } from "@/app/layout";
// import { useSearchParams } from "next/navigation";

const tabs = ["All", "Design", "Travel", "Fashion", "Technology", "Branding"];

export function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPages] = useState(9);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { query, setQuery } = useContext(valueContext);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getData(
          `https://dev.to/api/articles?per_page=${pages}&tag=${activeTab.toLowerCase()}`
        );
        setBlogs(data);
      } catch (err) {
        setError("Error, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    getBlogs();
  }, [pages, activeTab]);

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
            <h2 className="font-bold text-2xl">All Blog Post</h2>
            <div className="flex justify-between">
              <div className="flex gap-[20px] text-xs font-bold  cursor-pointer">
                {tabs.map((item) => (
                  <div
                    onClick={() => {
                      setActiveTab(item);
                    }}
                    key={item}
                    style={{
                      color: item === activeTab ? "orange" : "black",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="/blogs"
                className="font-bold text-xs text-[#495057] hover:text-[#D4A373]"
              >
                View All
              </a>
            </div>
            <div className="grid grid-cols-3 gap-[20px]">
              {blogs
                .filter((blog) => blog.title.includes(query))
                .map((blog) => {
                  return (
                    <Link href={`/blogs/${blog.id}`} key={blog.title}>
                      <Card
                        pic={blog["cover_image"]}
                        title={blog.title}
                        date={blog["readable_publish_date"]}
                        category={blog["type_of"]}
                      />
                    </Link>
                  );
                })}
            </div>
            <button
              className="px-[20px] py-[12px] text-[#696A75] border m-auto w-fit h-fit border-solid rounded-md border-[#696A754D] hover:bg-[#4B6BFB0D] hover:text-[#4B6BFB] "
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
