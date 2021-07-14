import React, { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

type breadcrumbProps = {
  children: ReactNode;
};

const Breadcrumb = ({ children }: breadcrumbProps) => {
  const history = useHistory();
  return (
    <nav className="grid grid-cols-3 grid-flow-row p-4 bg-p-black">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <FiArrowLeft size={20} color="#ffffff" />
      </button>
      <p className="col-span-2 font-bold text-sm">{children}</p>
    </nav>
  );
};

export default Breadcrumb;
