import twitterSVG from "../assets/twitter.svg";
import facebookSVG from "../assets/facebook.svg";
import githubSVG from "../assets/github.svg";
import linkedinSVG from "../assets/linkedin.svg";
import scissorsSVG from "../assets/scissors.svg";
import basketballSVG from "../assets/basketball.svg";

const Page7 = () => {
  return (
    <>
      <div className="Page7 h-[100vh] w-full flex items-center justify-center flex-col bg-violet-200 pl-[100px] pr-[100px]">
        <div className="P7_Text h-[70%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[72px] font-bold text-center">
            No long-term contracts.<br></br> No catches. Simple.
          </h1>
          <p className="text-[20px] text-[#667085]">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <button>Contact us</button>
        </div>
        <div className="P7_Footer h-[30%] w-full flex items-center justify-evenly flex-col border-t-[5px] border-t-gray-200">
          <div className="h-[20%] w-full flex items-center justify-start ">
            <h1 className="text-[24px] font-semibold">UniCraft</h1>
          </div>
          <div className="h-[40%] w-full flex items-center justify-start ">
            <p className="text-[18px] text-[#9CA3AF]">
              Design amazing digital experiences that<br></br> create more happy
              in the world.
            </p>
          </div>
          <div className="h-[20%] w-full flex items-center justify-center ">
            <div className="h-full w-[75%] flex items-center justify-start">
              <p className="text-[16px] text-[#9CA3AF]">
                © 2077 Untitled UI. All rights reserved.
              </p>
            </div>
            <div className="h-full w-[25%] flex items-center justify-between">
              <img src={twitterSVG} alt="" />
              <img src={linkedinSVG} alt="" />
              <img src={facebookSVG} alt="" />
              <img src={githubSVG} alt="" />
              <img src={scissorsSVG} alt="" />
              <img src={basketballSVG} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
