import { useState } from "react";
import arrowSVG from "../assets/arrow.svg";
const Page3 = () => {
  const [data] = useState<any[]>([
    {
      id: 1,
      heading: "Subscribe",
      desc: `Subscribe to a plan & you'll get an instant access to your private Slack channel.`,
    },
    {
      id: 2,
      heading: "Request",
      desc: `Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours`,
    },
    {
      id: 3,
      heading: "Revise",
      desc: `Need changes? We guarantee unlimited revisions until you're 200% satisfied.`,
    },
  ]);
  return (
    <>
      <div className="Page3 h-[100vh] w-full flex items-center justify-center pl-[100px] pr-[100px] pt-[80px] pb-[80px] md:hidden">
        <div className="P3_Card h-full w-full rounded-2xl  shadow-4xl">
          <div className="h-[30%] w-full flex items-center justify-center flex-col">
            <h1 className="text-[48px] font-semibold">How it works</h1>
            <p className="">
              Premium designs, unlimited requests, super fast delivery, for one
              flat monthly fee.
            </p>
          </div>
          <div className="h-[70%] w-full flex items-center justify-center pl-[20px] pr-[20px]">
            {data.map((e: any) => {
              return (
                <>
                  <div className="h-full w-[33%] flex items-center justify-center relative ">
                    <div className="h-full w-full flex items-center justify-center relative z-[2]">
                      <div className="h-full w-full flex items-center justify-center">
                        <h1 className="text-[200px] font-semibold bg-gradient-to-b from-[#D8B4FE] to-[#FFF} text-transparent bg-clip-text">
                          {e.id}
                        </h1>
                      </div>
                      <div className="h-full w-full flex items-center justify-center flex-col absolute z-[1]">
                        <h1 className="text-[40px] font-semibold text-center mt-[80px]">
                          {e.heading}
                        </h1>
                        <p className="text-[14px] text-center text-[#6B7280] pl-[40px] pr-[40px]">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="h-full w-full flex items-center justify-evenly absolute z-[1] pl-[100px] pr-[100px]">
              <img src={arrowSVG} alt="" className="mt-[-60px]" />
              <img src={arrowSVG} alt="" className="mt-[-60px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
