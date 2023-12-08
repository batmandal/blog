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
    <div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && (
        <div>
          <div>{blogs.title}</div>
          <div className="text-red-100">{blogs.slug}</div>
        </div>
      )}
    </div>
  );
}
