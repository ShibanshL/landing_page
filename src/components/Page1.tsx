const Page1 = () => {
  return (
    <>
      <div className="Page1 flex items-center justify-center h-[100vh] w-[100vw] flex-col pr-[8vw] pl-[8vw] ">
        <div className="Navbar h-[15%] w-full bg-pink-400"></div>
        <div className="P1_Heading h-[55%] w-full bg-green-200 flex items-center justify-center flex-col">
          <h1 className="text-[72px] text-center">
            Elevate Your Presence with Seamless Design and Innovation.
          </h1>
          <p>
            From strategic planning to digital presence, we're your dedicated
            partner in achieving solo success.
          </p>
          <button>View Pricing</button>
        </div>
        <div className="P1_Companies h-[30%] w-full bg-cyan-100 flex items-center justify-center flex-col">
          <span>Trusted by 250+ Companies</span>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Page1;
