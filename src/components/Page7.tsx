import twitterSVG from "../assets/twitter.svg";
import facebookSVG from "../assets/facebook.svg";
import githubSVG from "../assets/github.svg";
import linkedinSVG from "../assets/linkedin.svg";
import scissorsSVG from "../assets/scissors.svg";
import basketballSVG from "../assets/basketball.svg";
import "./bg.css";
const logoList = [
  twitterSVG,
  facebookSVG,
  githubSVG,
  linkedinSVG,
  scissorsSVG,
  basketballSVG,
];

const Page7 = () => {
  return (
    <>
      <div className="Page7 bg-no-repeat bg-cover h-[100vh] max-[1024px]:h-[50vh] max-[500px]:h-[100vh] w-full flex items-center justify-center flex-col pl-[100px] pr-[100px] max-[1024px]:pl-[50px] max-[1024px]:pr-[50px] max-[500px]:pl-[20px] max-[500px]:pr-[20px]">
        <div className="P7_Text h-[70%] w-full flex items-center justify-center flex-col">
          <h1 className="text-[55px] max-[1024px]:text-[52px] font-bold text-center max-[500px]:text-[30px]">
            No long-term contracts.<br></br> No catches. Simple.
          </h1>
          <p className="text-[20px] text-[#667085] max-[1024px]:text-[15px] max-[1024px]:mt-[10px] text-center">
            Start your 30-day free trial. Cancel anytime.
          </p>
          <button className="h-[60px] w-[200px] mt-[30px] bg-[#1F2937] text-white rounded-md outline-none max-[1024px]:hidden">
            Contact us
          </button>
        </div>
        <div className="P7_Footer h-[30%] w-full flex items-center justify-evenly flex-col border-t-[5px] border-t-gray-200 max-[1024px]:pt-[10px]">
          <div className="h-[20%] w-full flex items-center justify-start ">
            <h1 className="text-[24px] font-semibold">UniCraft</h1>
          </div>
          <div className="h-[40%] max-[500px]:h-[30%] w-full flex items-center justify-start ">
            <p className="text-[18px] text-[#9CA3AF] max-[1024px]:text-[15px]">
              Design amazing digital experiences that<br></br> create more happy
              in the world.
            </p>
          </div>
          <div className="h-[20%] max-[500px]:h-[30%] w-full flex items-center justify-center ">
            <div className="h-full w-[75%] max-[500px]:w-[75%] max-[500px]:pr-[100px] flex items-center justify-start">
              <p className="text-[16px] mt-[5px] text-[#9CA3AF] max-[500px]:text-[12px]">
                © 2077 Untitled UI. All rights reserved.
              </p>
            </div>
            <div className="h-full w-[25%] max-[500px]:w-[25%] flex items-center justify-between flex-wrap">
              {logoList.map((e: any) => {
                return (
                  <>
                    <img src={e} className="max-[500px]:w-[24px]" alt="" />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page7;
