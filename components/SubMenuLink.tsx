import Link from "next/link";
import React from "react";

type SubMenuLinkTypes = {
  icon?: JSX.Element | React.ReactNode;
  url: string;
  name?: string;
  color?: boolean;
};

const SubMenuLink = ({ icon, name, url, color }: SubMenuLinkTypes) => (
  <div className="flex  relative my-8 gap-2">
    <div className="px-2 pl-3 absolute">{icon}</div>
    <Link href={url} passHref>
      <a>
        <p
          className={`text-sm ml-10 font-semibold ${
            color === true ? "text-red-300" : "text-black-300"
          }`}
        >
          {name}
        </p>
      </a>
    </Link>
  </div>
);

export default SubMenuLink;
