"use client";

import { Blog } from "@/components/part3";
import { Page1 } from "@/components/Part1";
import { Trending } from "@/components/Part2";

export default function Home() {
  return (
    <div className="">
      <Page1 />
      <Trending />
      <Blog />
    </div>
  );
}
