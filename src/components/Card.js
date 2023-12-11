"use client";
export const Card = (props) => {
  return (
    <div
      className="p-[16px] gap-[16px] flex flex-col border-gray-300 border-solid border-2 rounded-xl h-full justify-center"
      // id={props.id}
    >
      <div>
        <img className="rounded-md" src={props.pic} />
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className="text-[#4B6BFB] font-medium text-sm bg-[#4B6BFB0D] py-[4px] px-[10px] w-fit h-fit rounded-md">
          {props.category}
        </span>
        <h3 className="font-semibold text-2xl">{props.title}</h3>
        <p className="text-base font-normal text-[#97989F]">{props.date}</p>
      </div>
    </div>
  );
};
