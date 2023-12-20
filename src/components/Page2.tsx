import png1 from "../assets/pngs/1.png";
import png2 from "../assets/pngs/2.png";
import png3 from "../assets/pngs/3.png";
import png4 from "../assets/pngs/4.png";
import png5 from "../assets/pngs/5.png";

const pngList = [png4, png1, png2, png3, png5];

const Page2 = () => {
  return (
    <>
      <div className="Page2 h-[100vh] w-full flex items-center justify-center flex-col">
        <div className="P2_Banner h-[70%] w-full flex items-center justify-center  overflow-hidden">
          <div className="h-full w-full flex items-center justify-between ">
            {pngList.map((e: any) => {
              return (
                <>
                  <img src={e} alt="" />
                </>
              );
            })}
          </div>
        </div>
        <div className="P2_Button h-[30%] w-full flex items-center justify-center ">
          <button className="h-[60px] w-[250px] border-2 border-[#4B5563] text-[#4B5563] rounded-md outline-none">
            View recent work
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
