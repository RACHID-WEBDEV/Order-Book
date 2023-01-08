export type ButtonProps = {
  className: string;
  children: any;
  color: string;
  icon?: JSX.Element | React.ReactNode;
  leftIcon: any;
  onClick?: () => void;
  outline: boolean;
  rightIcon: any;
  size: string;
};

export type CommonTypes = {
  className?: string;
  feedBack: string;
  floatLabel?: boolean;
  name?: string;
};
