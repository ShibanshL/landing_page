import CompanyLogo from "../assets/Company_logo.svg";
import avatarSVG from "../assets/Avatar.svg";

const Page4 = () => {
  return (
    <>
      <div className="Page4 h-[100vh] w-full flex items-center justify-center">
        <div className="P4_Card h-[75%] w-full flex items-center justify-center flex-col bg-[#F9FAFB]  pl-[100px] pr-[100px]">
          <div className="P4_Comment h-[60%] w-full flex items-center justify-end flex-col pb-[50px]">
            <img src={CompanyLogo} alt="" />
            <h1 className="text-center text-[42px]">
              We've been with unicraft to kick start every new project and can't
              imagine working without it.
            </h1>
          </div>
          <div className="P4_Commenter h-[40%] w-full flex items-center justify-start flex-col">
            <div className="h-[65px] w-[65px] rounded-[50px]">
              <img src={avatarSVG} alt="" />
            </div>
            <h1 className="mt-[20px] text-[18px] font-semibold">Candice Wu</h1>
            <p className="mt-[5px]">Product Manager, Sisyphus</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
