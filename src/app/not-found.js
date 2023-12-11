"use client";
export default function NotFound() {
  return (
    <div className="max-w-[1215px] m-auto flex justify-center py-[100px]">
      <div className="flex justify-between gap-[40px] w-fit">
        <p className="font-normal text-7xl  grid place-content-center  ">404</p>
        <span className="border-r border-[#696A75]" />
        <div className="flex flex-col gap-[20px] ">
          <h3 className="font-semibold text-2xl">Page Not Found</h3>
          <p className="font-narmal text-lg text-[#696A75] w-[60%]">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <a
            href="/"
            className="font-normal w-fit rounded-md text-lg px-[16px] py-[10px] bg-[#4B6BFB]"
          >
            Back To Home
          </a>
        </div>
      </div>
    </div>
  );
}
