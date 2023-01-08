import React from "react";
import subMenudata from "@/data/subMenuSidebar";
import { Search } from "@/public/assets/svgsIcons";
import SubMenuLink from "./SubMenuLink";

const SubMenu = () => {
  return (
    <div className="relative hidden lg:flex">
      <div className="w-52  sm:fixed sm:overflow-y-auto scrollbar ml-[92px] bg-gray-100 h-full">
        <div className="bg-white py-0.5 m-1.5 ">
          <div className="flex justify-center my-4 w-full">
            <div className="relative mx-2 ">
              <div className="text-gray-100 absolute ml-4 inset-0 m-auto w-4 h-4">
                <Search />
              </div>
              <input
                className=" focus:outline-none rounded w-full text-sm border-2 border-gray-300 text-gray-600 bg-gray-100 pl-10 py-1.5"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="mt-6 pb-28">
            {subMenudata.map((data, index) => {
              return (
                <SubMenuLink
                  key={index}
                  color={data.color}
                  name={data.name}
                  url={data.url}
                  icon={data.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
