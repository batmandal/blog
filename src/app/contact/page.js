"use client";
export default function Contact(params) {
  return (
    <div>
      <div className="">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-[50px] py-[10px ]">
          <div className="border-solid border-[#E8E8EA] p-[16px] gap-[10px] border rounded-xl">
            <h3>Addres</h3>
            <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
          </div>
          <div className="border-solid border-[#E8E8EA] p-[16px] gap-[10px] border rounded-xl">
            <h3>Contact</h3>
            <p>313-332-8662 info@email.com</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
