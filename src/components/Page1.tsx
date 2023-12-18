const Page1 = () => {
  return (
    <>
      <div className="Page1 flex items-center justify-center h-[100vh] w-full flex-col pr-[100px] pl-[100px]">
        <div className="Navbar h-[15%] w-full bg-pink-400"></div>
        <div className="P1_Heading h-[65%] w-full bg-green-200 flex items-center justify-center flex-col">
          <h1 className="text-[72px] text-center">
            Elevate Your Presence with Seamless Design and Innovation.
          </h1>
          <p>
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button>View Pricing</button>
        </div>
        <div className="P1_Companies h-[20%] w-full bg-cyan-100 flex items-center justify-center flex-col">
          <span>Trusted by 250+ Companies</span>
          <div className="P1_Banner h-[80%] w-full flex items-center justify-between">
            <div className="h-full w-[15%] bg-purple-200"></div>
            <div className="h-full w-[15%] bg-purple-200"></div>
            <div className="h-full w-[15%] bg-purple-200"></div>
            <div className="h-full w-[15%] bg-purple-200"></div>
            <div className="h-full w-[15%] bg-purple-200"></div>
            <div className="h-full w-[15%] bg-purple-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
