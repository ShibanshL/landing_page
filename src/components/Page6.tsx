import { useState } from "react";
import CollapseOpenSVG from "../assets/collapseOpen.svg";
import CollapseCloseSVG from "../assets/collapseClose.svg";

//interface for the collapse menu data type displayed here
interface cardDataType_P6 {
  id: number;
  question: string;
  answer: string;
}

const Page6 = () => {
  const [num, setNum] = useState(0);
  const [data] = useState<cardDataType_P6[]>([
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      question: "Can I change my plan later?",
      answer: "Yes, if you pay us in advance for that.",
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer:
        "You have to cancel within one day and only upto 60% is refundable within the timeframe.",
    },
    {
      id: 4,
      question: "Can other info be added to an invoice?",
      answer: "Yes, but to avail such service you have to pay us extra.",
    },
    {
      id: 5,
      question: "How does billing work?",
      answer:
        "We give you a number and you pay with cash, online transfer, UPI, Crypto, assets.",
    },
    {
      id: 6,
      question: "How do I change my account email?",
      answer: "By paying us extra for such correction services.",
    },
  ]);

  return (
    <>
      <div className="Page6 h-[100vh] max-[1024px]:h-[70vh] max-[500px]:h-[100vh] w-full flex items-center justify-center  flex-col pl-[100px] pr-[100px] max-[1024px]:pl-[50px] max-[1024px]:pr-[50px] max-[500px]:pl-[20px] max-[500px]:pr-[20px]">
        <div className="P6_Heading h-[20%] max-[1024px]:h-[30%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[58px] text-center font-semibold  max-[1024px]:text-[50px] max-[500px]:text-[30px]">
            Frequently asked questions
          </h1>
          <p className="text-[20px] text-[#667085] text-center max-[500px]:text-[14px] max-[500px]:w-[80%]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="P6_Collapse h-[80%] max-[1024px]:h-[70%] w-[70%] max-[1024px]:w-[80%] max-[500px]:w-full flex items-center justify-center max-[1024px]:justify-start flex-col">
          {data.map((e: cardDataType_P6, idx: number) => {
            return (
              <>
                <div
                  onClick={() => {
                    setNum(e.id);
                  }}
                  className={` ${idx == num - 1 ? "h-[100px]" : "h-[60px]"} ${
                    idx == num - 1
                      ? "max-[500px]:h-[120px]"
                      : "max-[500px]:h-[60px]"
                  }
            w-full flex items-start justify-start border-b-2 ${
              e.id !== 6 ? "border-gray-300" : "border-none"
            }  overflow-hidden transition-all p-[10px]`}
                >
                  <div className="min-h-full w-full flex items-center justify-start flex-col">
                    <div
                      className={`min-h-[20%] w-full flex items-center justify-between transition-all ${
                        idx != num - 1 ? "pb-[100px]" : "pb-[0px]"
                      }`}
                    >
                      <label>{e.question}</label>
                      <img
                        src={
                          idx == num - 1 ? CollapseOpenSVG : CollapseCloseSVG
                        }
                        alt=""
                      />
                    </div>
                    <div className=" min-h-[80%] w-full flex items-center justify-between">
                      <p
                        className={`max-[500px]:text-[12px] text-[12px] ${
                          idx == num - 1 ? "pb-[20px]" : "pb-[0px]"
                        }`}
                      >
                        {e.answer}
                      </p>
                    </div>
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

export default Page6;
