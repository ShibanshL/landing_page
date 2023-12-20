import { useState } from "react";
import tickSVG from "../assets/tick.svg";
import tick_W_SVG from "../assets/tixk_w.svg";

const constantCardData = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs",
];

const Page5 = () => {
  const [cardData] = useState<any[]>([
    {
      heading: "Freebie",
      desc: "Ideal for individuals who need quick access to basic features.",
      price: 0,
    },
    {
      heading: "Professional",
      desc: "Ideal for individuals who who need advanced features and tools for client work.",
      price: 25,
    },
    {
      heading: "Enterprise",
      desc: "Ideal for businesses who need personalized services and security for large teams. ",
      price: 100,
    },
  ]);
  return (
    <>
      <div className="Page5 h-[160vh] max-[1024px]:h-[135vh] max-[500px]:h-[260vh] max-[400px]:h-[330vh] max-[768px]:h-[140vh] w-full flex items-center justify-center flex-col bg-[rgb(253,252,255)] p-[100px] max-[1024px]:p-[50px] max-[500px]:pl-[20px] max-[500px]:pr-[20px]">
        <div className="P5_Text h-[20%]  max-[500px]:h-[10%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[58px] text-center font-semibold  max-[1024px]:text-[50px] max-[500px]:text-[30px]">
            Pricing made for collaborative support.
          </h1>
          <div className="w-[60%] max-[1024px]:w-[70%] max-[500px]:w-[90%] max-[500px]:mt-[10px]">
            <p className="text-[20px] text-[#6B7280] text-center max-[500px]:text-[12px]">
              Plain is made for your entire company. Only pay for users that
              actually message customers. Everyone else is free, forever.
            </p>
          </div>
        </div>
        <div className="P5_Cards h-[80%] max-[500px]:h-[90%] w-full flex flex-wrap items-center justify-between max-[1024px]:justify-evenly">
          {cardData.map((e: any) => {
            return (
              <>
                <div
                  className={`h-[630px] w-[30%] max-[1024px]:w-[380px] max-[1024px]:h-[680px] max-[768px]:w-[280px] max-[768px]:h-[500px] max-[500px]:h-[650px] max-[500px]:w-full ${
                    e.heading == "Professional" ? "bg-[#1F2937]" : "bg-[#FFF]"
                  } rounded-lg 
                  ${e.heading == "Professional" ? "shadow-3xl" : ""}
                   ${
                     e.heading == "Professional"
                       ? ""
                       : "border-[1px] border-[#E5E7EB]"
                   } pt-[40px] pb-[40px] pl-[24px] pr-[24px]
                  `}
                >
                  <div className="h-[50%] w-full ">
                    <div className="h-[70%] w-full flex items-start justify-between flex-col">
                      <label
                        className={`font-semibold text-[22px]  ${
                          e.heading == "Professional"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {e.heading}
                      </label>
                      <p
                        className={`text-[14px] max-[768px]:text-[10px] max-[500px]:text-[16px] ${
                          e.heading == "Professional"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {e.desc}
                      </p>
                      <h1
                        className={`text-[56px] max-[768px]:text-[40px]  max-[500px]:text-[60px] flex items-center justify-center ${
                          e.heading == "Professional"
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        ${e.price}{" "}
                        <span
                          className={`text-[14px] max-[768px]:text-[10px] ${
                            e.heading == "Professional"
                              ? "text-white"
                              : "text-black"
                          }`}
                        >
                          / Month
                        </span>
                      </h1>
                    </div>
                    <div className="h-[30%] w-full flex items-center justify-center ">
                      <button
                        className={
                          e.heading == "Professional"
                            ? "h-[44px] bg-white text-[#1F2937] w-[100%] rounded-md outline-none font-medium"
                            : "h-[44px] border-2 border-black w-[100%] rounded-md outline-none font-medium"
                        }
                      >
                        Get Started Now
                      </button>
                    </div>
                  </div>
                  <div className="h-[50%] w-full flex items-start justify-between flex-col pt-[15px]">
                    {constantCardData.map((v: string) => {
                      return (
                        <>
                          <div className="flex items-start justify-between flex-row gap-[7px]">
                            <img
                              src={
                                e.heading == "Professional"
                                  ? tick_W_SVG
                                  : tickSVG
                              }
                              alt=""
                            />
                            <p
                              className={`text-[15px] max-[768px]:text-[10px]  max-[500px]:text-[14px] ${
                                e.heading == "Professional"
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              {v}
                            </p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page5;
