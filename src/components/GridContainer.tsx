"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

const GridContainer = (props: Props) => {
  const { children } = props;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center self-center place-self-center place-items-center justify-center justify-self-center gap-5">
      {children}
    </div>
  );
};

export default GridContainer;
