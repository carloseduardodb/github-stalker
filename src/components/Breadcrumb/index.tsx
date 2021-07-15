import React, { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

type breadcrumbProps = {
  children: ReactNode;
};

const Breadcrumb = ({ children }: breadcrumbProps) => {
  const history = useHistory();
  return (
    <nav className="flex flex-row gap-x-3 p-4 py-5 bg-p-black">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <FiArrowLeft size={25} color="#ffffff" />
      </button>
      <div className="col-span-2 font-bold text-sm">{children}</div>
    </nav>
  );
};

export default Breadcrumb;
