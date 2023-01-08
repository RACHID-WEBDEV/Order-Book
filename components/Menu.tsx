import React from "react";
import sidebarData from "@/data/sidebar";
import MenuLink from "./MenuLink";
const Menu = () => {
  return (
    <div className="relative">
      <div className="w-[90px] absolute sm:fixed sm:overflow-y-auto scrollbar  bg-white shadow md:h-full hidden sm:flex">
        <div className="px-1">
          <ul className="mt-16 pb-32 text-center">
            {sidebarData.map((data, index) => {
              return (
                <MenuLink
                  key={index}
                  name={data.name}
                  color={data.color}
                  url={data.url}
                  icon={data.icon}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
