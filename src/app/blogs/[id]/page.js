"use client";
import { useState, useEffect } from "react";
import { getData } from "@/utils/getData";
import { useParams } from "next/navigation";
import { Loader } from "@/components/Loader";

export default function Home() {
  const { id } = useParams();

  if (!id) return;

  const [blogs, setBlogs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await getData(`https://dev.to/api/articles/${id}
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
  }, [id]);
  return (
    <div className=" m-auto py-[80px]">
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div className="flex flex-col gap-[32px] m-auto max-w-[1215px]">
          <div className="font-semibold text-4xl">{blogs.title}</div>
          <div>
            <p>{blogs["readable_publish_date"]}</p>
          </div>
          <img className="" src={blogs["cover_image"]} />
          <p
            className="text-xl flex flex-col gap-[32px] flex-wrap font-normal"
            dangerouslySetInnerHTML={{ __html: blogs.body_html }}
          ></p>
        </div>
      )}
    </div>
  );
}
