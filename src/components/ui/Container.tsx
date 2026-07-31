import React, { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-5 sm:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;