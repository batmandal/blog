"use client";
import { Logo } from "@/assets/svg/Logo";
import { Search } from "@/assets/svg/Search";

export function Header() {
  return (
    <div className="p-[20px] h-[72px] w-full m-auto">
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
        ></input>
      </div>
    </div>
  );
}
