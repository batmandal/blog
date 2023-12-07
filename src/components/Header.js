import { Logo } from "@/assets/svg/Logo";

export function Header() {
  return (
    <div className="p-[20px] h-[72px] max-w-[1215px] m-auto">
      <div className="flex justify-between m-auto">
        <Logo />
        <div className="flex gap-[40px]">
          <a href="/">Home</a>
          <a href="/blogs">Blog</a>
          <a href="/contact">Contact</a>
        </div>

        <input
          type="text"
          placeholder="search"
          className="border-solid border-black border rounded"
        ></input>
      </div>
    </div>
  );
}
