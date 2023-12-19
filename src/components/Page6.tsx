import { useState } from "react";
import CollapseOpenSVG from "../assets/collapseOpen.svg";
import CollapseCloseSVG from "../assets/collapseClose.svg";

const Page6 = () => {
  const [test, setTest] = useState(false);
  const [data] = useState<any>([
    {
      id: 1,
      open: false,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: 2,
      open: false,
      question: "Can I change my plan later?",
      answer: "Yes, if you pay us in advance for that.",
    },
    {
      id: 3,
      open: false,
      question: "What is your cancellation policy?",
      answer:
        "You have to cancell within one day and only upto 60% is refundable within the timeframe",
    },
    {
      id: 4,
      open: false,
      question: "Can other info be added to an invoice?",
      answer: "Yes, but to avail such service you have to pay us extra.",
    },
    {
      id: 5,
      open: false,
      question: "How does billing work?",
      answer:
        "We give you a number and you pay with cash, online transfer, UPI, Crypto, assets",
    },
    {
      id: 6,
      open: false,
      question: "How do I change my account email?",
      answer: "By paying us extra for such correction services",
    },
  ]);

  return (
    <>
      <div className="Page6 h-[100vh] w-full flex items-center justify-center flex-col pl-[100px] pr-[100px]">
        <div className="P6_Heading h-[20%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[58px]">Frequently asked questions</h1>
          <p className="text-[20px] text-[#667085]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div className="P6_Collapse h-[80%] w-[70%] flex items-center justify-center flex-col">
          {data.map((e: any, idx: number) => {
            return (
              <>
                <div
                  onClick={() => {
                    console.log(idx, "&&", e.id - 1);
                    if (idx == e.id - 1) {
                      setTest(!test);
                    }
                  }}
                  className={` ${test ? "h-[100px]" : "h-[60px]"}
            w-full flex items-start justify-start border-b-2 border-gray-300  overflow-hidden transition-all`}
                >
                  <div className="min-h-full w-full flex items-center justify-start flex-col">
                    <div
                      className={`min-h-[20%] w-full flex items-center justify-between transition-all ${
                        !test ? "pb-[100px]" : "pb-[0px]"
                      }`}
                    >
                      <label>{e.question}</label>
                      <img
                        src={test ? CollapseOpenSVG : CollapseCloseSVG}
                        alt=""
                      />
                    </div>
                    <div className=" min-h-[80%] w-full flex items-center justify-between">
                      <p>{e.answer}</p>
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
