import ZapierSVG from "../assets/zapier.svg";
import spotifySVG from "../assets/spotify.svg";
import zoomSVG from "../assets/zoom.svg";
import slackSVG from "../assets/slack.svg";
import amazonSVG from "../assets/amazon.svg";
import adobeSVG from "../assets/adobe.svg";

const imges = [ZapierSVG, spotifySVG, zoomSVG, slackSVG, amazonSVG, adobeSVG];

const Page1 = () => {
  return (
    <>
      <div className="Page1 flex items-center justify-center h-[100vh] max-[500px]:h-[140vh] w-full flex-col pr-[100px] pl-[100px] max-[1024px]:pl-[50px] max-[1024px]:pr-[50px] max-[500px]:pl-[20px] max-[500px]:pr-[20px]">
        <div className="Navbar h-[15%] w-full flex items-center justify-center max-[1024px]:hidden ">
          <div className="w-[15%] h-full flex items-center justify-start">
            <h1 className="text-[24px] font-semibold">UniCraft</h1>
          </div>
          <div className="w-[70%] h-full flex items-center justify-center">
            <div className="h-full w-[35%] flex items-center justify-between ">
              <label className="">How it works</label>
              <label>Pricing</label>
              <label>FAQ</label>
            </div>
          </div>
          <div className="w-[15%] h-full flex items-center justify-end">
            <button className="h-[44px] w-[80%] border-2 border-[#4B5563] text-[#4B5563] rounded-md outline-none">
              Contact Us
            </button>
          </div>
        </div>
        <div className="P1_Heading h-[65%] max-[1024px]:h-[60%] max-[500px]:h-[40%] w-full  flex items-center justify-start max-[500px]:justify-center md:justify-center flex-col">
          <h1 className="text-[60px] text-center font-bold max-[500px]:text-[30px]">
            Elevate Your Presence with Seamless Design and Innovation.
          </h1>
          <p className="mt-[10px] text-[#4B5563] text-center">
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button className="h-[60px] w-[200px] mt-[30px] bg-[#1F2937] text-white rounded-md outline-none">
            View Pricing
          </button>
        </div>
        <div className="P1_Companies h-[20%] max-[1024px]:h-[40%]  max-[500px]:h-[60%] w-[80%] max-[1024px]:w-[100%] flex items-center justify-center max-[1024px]:justify-start max-[500px]:justify:start flex-col">
          <span className="text-[#9CA3AF] max-[500px]:text-[10px]">
            Trusted by 250+ Companies
          </span>
          <div className="P1_Banner h-[80%] max-[1024px]:h-[40%] w-[80%] max-[1024px]:mt-[20px] flex items-start justify-between max-[1024px]:justify-center flex-wrap">
            {imges.map((e: any) => {
              return (
                <>
                  <div className="h-full max-[1024px]:h-[100px] w-[100px] max-[1024px]:w-[180px]  max-[500px]:w-[160px] flex items-center justify-center">
                    <img src={e} alt="" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
