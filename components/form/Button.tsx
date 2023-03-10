import React from "react";
import classNames from "classnames";

export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  onClick?: () => void;
};
export const ButtonOutline = ({
  children,
  className,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        " focus:outline-none whitespace-nowrap font-semibold rounded font-Inter text-xs lg:text-sm px-4 py-0.5 text-center mr-2 mb-2",
        {
          " bg-gray-100 text-custom-green border border-custom-green ":
            color === "primary",
        },
        {
          "text-red-300 bg-gray-100 border border-red-300":
            color === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

ButtonOutline.defaultProps = {
  color: "primary",
  className: null,
  onClick: () => {},
};

export const ButtonGroup = ({
  children,
  className,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        " focus:outline-none font-bold whitespace-nowrap rounded-full font-Inter text-xs lg:text-sm px-5 py-2.5 text-center mr-2 mb-2",
        {
          " bg-gray-100 text-black-100 hover:bg-red-300 hover:text-white":
            color === "primary",
        },
        { "text-white bg-red-300 hover:bg-black-100": color === "secondary" },
        className
      )}
    >
      {children}
    </button>
  );
};

ButtonGroup.defaultProps = {
  color: "primary",
  className: null,
  onClick: () => {},
};
const Button = ({ className, children, color, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        " whitespace-nowrap font-Inter text-xs lg:text-sm font-bold focus:outline-none border rounded-[2px] py-3 w-full",
        { "bg-green-100 hover:bg-black-400 text-white": color === "primary" },
        { "hover:bg-green-100 bg-black-400 text-white": color === "secondary" },
        {
          "bg-white border-primary-200 text-black-300 hover:bg-green-100 hover:text-white":
            color === "teritary",
        },

        className
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "primary",
  className: null,
  onClick: () => {},
};

export default Button;
