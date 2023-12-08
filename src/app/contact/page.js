"use client";
export default function Contact(params) {
  return (
    <div className="max-w-[895px] px-[135.5px] my-[100px] m-auto">
      <div className="flex flex-col gap-[20px] m-auto pb-[39px]">
        <h2 className="text-4xl font-semibold">Contact Us</h2>
        <p className="font-normal text-base text-[#696A75]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-[50px] py-[10px ]">
          <div className="border-solid border-[#E8E8EA] p-[16px] gap-[10px] border rounded-xl grid">
            <h3 className="text-2xl font-semibold">Addres</h3>
            <p className="text-lg font-normal text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border-solid border-[#E8E8EA] p-[16px] gap-[10px] border rounded-xl grid">
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="text-lg font-normal text-[#696A75]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] bg-[#F6F6F7] rounded-[10px] w-full p-[35px] ">
        <h4 className="font-semibold text-lg ">Leave a Message</h4>
        <div className="w-fit flex flex-col gap-[20px]">
          <div className="flex gap-[28px]">
            <input
              type="text"
              placeholder="Your name"
              className="rounded-md border border-solid border-[#DCDDDF] px-[18px] py-[5px]"
            ></input>
            <input
              type="text"
              placeholder="Your email"
              className="rounded-md border border-solid border-[#DCDDDF] px-[18px] py-[5px]"
            ></input>
          </div>
          <input
            type="text"
            placeholder="subject"
            className="rounded-md border border-solid border-[#DCDDDF] px-[18px] py-[5px] "
          ></input>
          <textarea
            type="text"
            placeholder="Text messsage"
            className="rounded-md border border-solid border-[#DCDDDF] p-[18px] min-h-[134px] text-start"
          ></textarea>
        </div>

        <button className="px-[16px] py-[10px] w-fit bg-[#4B6BFB] text-white rounded-md">
          Send Message
        </button>
      </div>
    </div>
  );
}
