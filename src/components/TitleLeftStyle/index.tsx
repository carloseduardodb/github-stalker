import React, { ReactNode } from "react";

type titleLeftStyleProps = {
  children: ReactNode;
};

const TitleLeftStyle = ({ children }: titleLeftStyleProps) => {
  return (
    <div className="flex items-center gap-x-3 -ml-7">
      <div className="w-3 h-12 rounded-r-full bg-p-yellow" />
      {children}
    </div>
  );
};

export default TitleLeftStyle;
