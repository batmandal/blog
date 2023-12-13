"use client";
import { valueContext } from "@/app/layout";
import { Logo } from "@/assets/svg/Logo";
// import { Search } from "@/assets/svg/Search";
import { createContext, useContext, useState } from "react";

export function Header() {
  const { query, setQuery } = useContext(valueContext);

  return (
    <div className="p-[20px] h-[72px] w-full m-auto fixed top-0 bg-white  z-30">
      <div className="flex max-w-[1215px] justify-between m-auto">
        <a href="/">
          <Logo />
        </a>
        <div className="flex gap-[40px]">
          <a href="/">Home</a>
          <a href="/blogs">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        <input
          type="text"
          placeholder="search"
          className=" rounded bg-[#F4F4F5] px-[16px] py-[3px]"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
