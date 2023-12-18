import { useState } from "react";

const Page6 = () => {
  const [data, setData] = useState<any>([
    {
      id: 1,
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
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
        "You have to cancell within one day and only upto 60% is refundable within the timeframe",
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
        "We give you a number and you pay with cash, online transfer, UPI, Crypto, assets",
    },
    {
      id: 6,
      question: "How do I change my account email?",
      answer: "By paying us extra for such correction services",
    },
  ]);

  return (
    <>
      <div className="Page6 h-[100vh] w-full flex items-center justify-center flex-col bg-cyan-200 pl-[100px] pr-[100px]">
        <div className="P6_Heading h-[20%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[58px]">Frequently asked questions</h1>
          <p className="text-[20px] text-[#667085]">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Page6;
