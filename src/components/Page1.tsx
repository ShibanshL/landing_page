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
      <div className="Page1 flex items-center justify-center h-[100vh] w-full flex-col pr-[100px] pl-[100px] ">
        <div className="Navbar h-[15%] w-full flex items-center justify-center  ">
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
        <div className="P1_Heading h-[65%] md:h-[80%] w-full  flex items-center justify-start md:justify-center flex-col">
          <h1 className="text-[60px] text-center font-bold">
            Elevate Your Presence with<br></br> Seamless Design and Innovation.
          </h1>
          <p className="mt-[10px] text-[#4B5563]">
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button className="h-[60px] w-[200px] mt-[30px] bg-[#1F2937] text-white rounded-md outline-none">
            View Pricing
          </button>
        </div>
        <div className="P1_Companies h-[20%] w-[80%] flex items-center justify-center flex-col">
          <span>Trusted by 250+ Companies</span>
          <div className="P1_Banner h-[80%] w-[80%] flex items-center justify-between flex-wrap">
            {imges.map((e: any) => {
              return (
                <>
                  <div className="h-full w-[100px] md:w-[120px] flex items-center justify-center">
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
