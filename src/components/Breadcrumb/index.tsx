import React, { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";

type breadcrumbProps = {
  children: ReactNode;
};

const Breadcrumb = ({ children }: breadcrumbProps) => {
  return (
    <nav className="grid grid-cols-3 grid-flow-row p-4 bg-p-black">
      <a href="#">
        <FiArrowLeft size={20} color="#ffffff" />
      </a>
      <p className="col-span-2 font-bold text-sm">{children}</p>
    </nav>
  );
};

export default Breadcrumb;
