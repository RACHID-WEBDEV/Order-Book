import Marquee from "react-fast-marquee";

const LiveMarketFooter = () => {
  return (
    <div className="relative z-50 bg-white scrollbar">
      <div className="fixed w-full bottom-0 bg-white flex items-center border-b-2 border-gray-200">
        <div className="flex items-center relative w-full ">
          <div className="bg-black-900 text-center right-0 px-3 lg:px-8 flex py-3 w-40">
            <p className="text-white font-semibold text-sm">Live Market</p>
          </div>
          <Marquee speed={40}>
            <div className="flex items-center gap-5 text-sm  text-black-900">
              <div className="m-2">
                <p className="font-bold ">Soybean (SBBS)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Sorghum (SSGM)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Soybean (SBBS)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Maize (SMAZ)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Paddy Rice (SPRL)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Cocoa (SCOC)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Soybean (SBBS)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
              <div className="m-2">
                <p className="font-bold ">Sorghum (SSGM)</p>
                <p className="font-semibold">₦30,834.59</p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LiveMarketFooter;
