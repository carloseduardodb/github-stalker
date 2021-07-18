import { Transition } from "@headlessui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { FiGithub, FiHome, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

interface mobileNavigatorProps {
  children: ReactNode;
}

const MobileNavigator = ({ children }: mobileNavigatorProps) => {
  const history = useHistory();
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsShowing(true), 500);
  }, [children]);

  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <div className="sm:w-9/12">
        <Transition
          show={isShowing}
          appear={true}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-x-16"
          enterTo="-translate-x-4"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        >
          {children}
        </Transition>
        <nav className="fixed bottom-0 bg-white w-full py-2 rounded-t-xl sm:w-9/12">
          <ul className="grid grid-cols-4 text-p-gray">
            <li>
              <Link to="/home">
                <span
                  className={`${
                    history.location.pathname === "/home"
                      ? "text-p-black"
                      : "text-p-gray"
                  } flex flex-col-reverse justify-center items-center text-xs`}
                >
                  Home <FiHome size={20} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/repositories">
                <span
                  className={`${
                    history.location.pathname === "/repositories"
                      ? "text-p-black"
                      : "text-p-gray"
                  } flex flex-col-reverse justify-center items-center text-xs`}
                >
                  Repos <FiGithub size={20} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/followers">
                <span
                  className={`${
                    history.location.pathname.includes("followers")
                      ? "text-p-black"
                      : "text-p-gray"
                  } flex flex-col-reverse justify-center items-center text-xs`}
                >
                  Seguidores <FiUsers size={20} />
                </span>
              </Link>
            </li>
            <li>
              <Link to="/following">
                <span
                  className={`${
                    history.location.pathname.includes("/following")
                      ? "text-p-black"
                      : "text-p-gray"
                  } flex flex-col-reverse justify-center items-center text-xs`}
                >
                  Seguindo <FiUsers size={20} />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigator;
