"use client";
import { FbLogo } from "@/assets/svg/FbLogo";
import { FooterLogo } from "@/assets/svg/FooterLogo";
import { IgLogo } from "@/assets/svg/IgLogo";
import { InLogo } from "@/assets/svg/InLogo";
import { TwitterLogo } from "@/assets/svg/TwitterLogo";

export function Footer(params) {
  return (
    <div className="w-full bg-[#E8E8EA] m-auto pt-[64px]">
      <div className=" m-auto max-w-[1215px]">
        <div className="grid grid-cols-3 mb-[25px]">
          <div className="flex flex-col gap-[24px]">
            <h4 className="text-lg font-semibold">About</h4>
            <p className="text-[#696A75] font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="flex flex-col text-base font-normal">
              <a>Email : info@jstemplate.net</a>
              <a>Phone : 880 123 456 789</a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a href="/">Home</a>
            <a href="blogs">Blog</a>
            <a href="contact">Contact</a>
          </div>
          <div className="flex gap-[27px]">
            <a>
              <FbLogo />
            </a>
            <a>
              <TwitterLogo />
            </a>
            <a>
              <IgLogo />
            </a>
            <a>
              <InLogo />
            </a>
          </div>
        </div>
        <div className="border-t-2 border-gray-300  flex py-[20.5px] items-center justify-between">
          <FooterLogo />
          <div className="grid grid-cols-3 gap-[16px]">
            <a className="border-r-2 border-gray-300">Terms of Use</a>
            <a className="border-r-2 border-gray-300 pr-[16px]">
              Privacy Policy
            </a>
            <a>Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
