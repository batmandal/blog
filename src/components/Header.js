import { Logo } from "@/assets/svg/Logo";
import { Menu } from "@/assets/svg/Menu";
export function Header() {
  return (
    <div className="p-[20px] h-[72px] w-full ">
      <div className="flex w-[1215px] justify-between m-auto">
        <Logo />
        <div className="flex gap-[40px]">
          <a>Home</a>
          <a>Blog</a>
          <a>Contact</a>
        </div>

        {/* <Menu /> */}
        <input
          type="text"
          placeholder="search"
          className="border-solid border-black"
        ></input>
      </div>
    </div>
  );
}
