import React from "react";
import {
  LogoSM,
  Sun,
  RightArrow,
  SelectArrowIcon,
} from "@/public/assets/svgsIcons";

const NavBar = () => {
  return (
    <div className="relative z-50 bg-white ">
      <div className="fixed w-full bg-white flex items-center border-b-2 border-gray-200">
        <div className="flex items-center md:px-5 lg:px-0 justify-between w-full lg:w-[40%] xl:w-[55%] lg:border-r-2 border-gray-200 lg:pr-6">
          <span className="lg:pl-5">
            <LogoSM />
          </span>

          <div className="hidden lg:flex item-center gap-x-1 bg-gray-200 rounded-[45px] p-1.5 pr-2 ">
            <span className="uppercase mt-1.5 font-semibold text-sm text-black-300 pl-1.5">
              LIGHT
            </span>
            <span className=" bg-white rounded-full p-2">
              <Sun />
            </span>
          </div>

          <div className="p-4 relative lg:hidden">
            <div className=" flex items-center gap-3 justify-end pl-5">
              <span className=" bg-gray-100 rounded-full p-2">
                <Sun />
              </span>
              <h3 className="bg-black-300 text-white py-1 px-2 font-bold ">
                DEMO
              </h3>
              <SelectArrowIcon stroke="#000" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex ">
          <div className="flex items-center">
            <RightArrow className="mx-4" />
            <div className="hidden lg:flex items-center gap-6 border-r-2 border-gray-200 pr-3">
              <div className="m-2">
                <p className="uppercase text-xs text-semibold text-black-700">
                  CASH BALANCE
                </p>
                <h3 className="uppercase text-base tracking-wider text-black-300 font-black">
                  ₦8,374,763
                </h3>
              </div>
              <div className="m-2">
                <p className="uppercase text-xs text-semibold text-black-700">
                  SECURITIES VALUE
                </p>
                <h3 className="uppercase text-base tracking-wider text-black-300 font-black">
                  ₦8,374,763
                </h3>
              </div>
              <div className="m-2">
                <p className="uppercase text-xs text-semibold text-black-700">
                  LOAN BALANCE
                </p>
                <h3 className="uppercase text-base tracking-wider text-black-300 font-black">
                  ₦8,374,763
                </h3>
              </div>
            </div>
            <div className="p-4 relative">
              <div className=" flex items-center gap-3 justify-end pl-5">
                <h3 className="bg-black-300 text-white py-1 px-2 font-bold ">
                  DEMO
                </h3>
                <SelectArrowIcon stroke="#000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
