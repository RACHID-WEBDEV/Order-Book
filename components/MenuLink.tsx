import Link from "next/link";
import React from "react";

type MenuLinkTypes = {
  icon?: JSX.Element | React.ReactNode;
  url: string;
  name?: string;
  color?: boolean;
};

const MenuLink = ({ icon, url, name, color }: MenuLinkTypes) => (
  <li className="cursor-pointer mb-6">
    <Link href={url} passHref className="">
      <a>
        <div className="mb-2 flex flex-col items-center justify-center ">
          {icon}
        </div>
        <span
          className={`text-xs text-center font-black ${
            color === true ? "text-red-300" : "text-black-300"
          }`}
        >
          {name}
        </span>
      </a>
    </Link>
  </li>
);

export default MenuLink;
