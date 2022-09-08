import React from "react";
import clsx from "clsx";

interface Props extends React.PropsWithChildren {
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const Cell: React.FC<Props> = ({
  children,
  className,
  onClick,
  isActive = false,
}) => {
  return (
    <div
      onClick={isActive ? undefined : onClick}
      className={clsx(
        "h-12 flex items-center justify-center border-b border-r cursor-pointer",
        { "hover:bg-gray-100 active:bg-blue-500 active:text-white": !isActive &&onClick },
        { "bg-blue-600 text-white": isActive },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Cell;
