import { useState } from "react";
import tickSVG from "../assets/tick.svg";

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
  const [cardData, setCardData] = useState<any[]>([
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
      <div className="Page5 h-[160vh] w-full flex items-center justify-center flex-col bg-[rgb(253,252,255)] p-[100px]">
        <div className="P5_Text h-[20%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[58px] text-center">
            Pricing made for collaborative support.
          </h1>
          <div className="w-[60%] bg-orange-300">
            <p className="text-[20px] text-[#6B7280] text-center">
              Plain is made for your entire company. Only pay for users that
              actually message customers. Everyone else is free, forever.
            </p>
          </div>
        </div>
        <div className="P5_Cards h-[80%] w-full flex items-center justify-between flex-wrap">
          {cardData.map((e: any) => {
            return (
              <>
                <div
                  className={`h-[630px] w-[30%] ${
                    e.heading == "Professional" ? "bg-[#1F2937]" : "bg-[#FFF]"
                  } rounded-lg 
                  ${e.heading == "Professional" ? "shadow-3xl" : ""}
                   ${
                     e.heading == "Professional"
                       ? ""
                       : "border-[1px] border-[#E5E7EB]"
                   } pt-[40px] pb-[40px] pl-[24px] pr-[24px] flex-wrap
                  `}
                >
                  <div className="h-[50%] w-full ">
                    <div className="h-[70%] w-full flex items-start justify-between flex-col bg-pink-300">
                      <label className="font-semibold text-[22px]">
                        {e.heading}
                      </label>
                      <p className="text-[14px]">{e.desc}</p>
                      <h1 className="text-[56px] flex items-center justify-center">
                        ${e.price} <span className="text-[14px]">/ Month</span>
                      </h1>
                    </div>
                    <div className="h-[30%] w-full flex items-center justify-center bg-yellow-200">
                      <button className="h-[44px] border-2 border-black w-[100%] rounded-md outline-none">
                        Get Started Now
                      </button>
                    </div>
                  </div>
                  <div className="h-[50%] w-full flex items-start justify-between flex-col bg-purple-300">
                    {constantCardData.map((e: string) => {
                      return (
                        <>
                          <div className="flex items-start justify-between flex-row gap-[7px]">
                            <img src={tickSVG} alt="" />
                            <p className="text-[15px]">{e}</p>
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
