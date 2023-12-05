import { Car } from "@/assets/svg/Car";
export function Card(props) {
  return (
    <div>
      <div>
        <Car />
      </div>
      <div className="m-[16px] p-[8px] flex flex-col gap-[16px]">
        <span className="text-[#4B6BFB] py-[10px] px-[4px]">Technology</span>
        <p>
          The impact of Technology on the Workplace: How Technology is Changing
        </p>
        <p>August 20, 2022</p>
      </div>
    </div>
  );
}
