"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = (props: Props) => {
  const { children, className } = props;

  return (
    <div
      className={`h-full w-full bg-white shadow-md shadow-black/20 rounded-lg p-10 ${className}`}
    >
      {children}  
    </div>
  );
};

export default Card;
