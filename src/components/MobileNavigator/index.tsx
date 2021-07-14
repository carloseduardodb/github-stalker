import React from "react";
import { ReactNode } from "react";
import { FiGithub, FiHome, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface mobileNavigatorProps {
  children: ReactNode;
}

const MobileNavigator = ({ children }: mobileNavigatorProps) => {
  const history = useHistory();
  return (
    <>
      {children}
      <nav className="fixed bottom-0 bg-white w-full py-2 rounded-t-xl">
        <ul className="grid grid-cols-4 text-p-gray">
          <Link to="/home">
            <li
              className={`${
                history.location.pathname === "/home"
                  ? "text-p-black"
                  : "text-p-gray"
              } flex flex-col-reverse justify-center items-center text-xs`}
            >
              Home <FiHome size={20} />
            </li>
          </Link>
          <Link to="/repositories">
            <li
              className={`${
                history.location.pathname === "/repositories"
                  ? "text-p-black"
                  : "text-p-gray"
              } flex flex-col-reverse justify-center items-center text-xs`}
            >
              Repos <FiGithub size={20} />
            </li>
          </Link>
          <Link to="/followers">
            <li
              className={`${
                history.location.pathname === "/followers"
                  ? "text-p-black"
                  : "text-p-gray"
              } flex flex-col-reverse justify-center items-center text-xs`}
            >
              Seguidores <FiUsers size={20} />
            </li>
          </Link>
          <Link to="/following">
            <li
              className={`${
                history.location.pathname === "/following"
                  ? "text-p-black"
                  : "text-p-gray"
              } flex flex-col-reverse justify-center items-center text-xs`}
            >
              Seguindo <FiUsers size={20} />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigator;
