import React from "react";
import { FiGithub, FiHome, FiUsers } from "react-icons/fi";

const MobileNavigator = () => {
  return (
    <nav className="fixed bottom-0 bg-white w-full py-2 rounded-t-xl">
      <ul className="grid grid-cols-4 text-p-gray">
        <li className="text-p-black flex flex-col-reverse justify-center items-center text-xs">
          Home <FiHome size={20} />
        </li>
        <li className="text-p-gray flex flex-col-reverse justify-center items-center text-xs">
          Repos <FiGithub size={20} />
        </li>
        <li className="text-p-gray flex flex-col-reverse justify-center items-center text-xs">
          Seguidores <FiUsers size={20} />
        </li>
        <li className="text-p-gray flex flex-col-reverse justify-center items-center text-xs">
          Seguindo <FiUsers size={20} />
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavigator;
