import TitleLeftStyle from "components/TitleLeftStyle";
import React from "react";
import { FiLock, FiStar, FiUnlock } from "react-icons/fi";

const Repository = () => {
  return (
    <li className="px-7 py-4 border-b border-p-gray">
      <TitleLeftStyle>
        <h2 className="font-bold">brasiliapp-react-native</h2>
      </TitleLeftStyle>
      <span>Repositories is centralize of the basquestbool mobile project</span>
      <div className="flex flex-row justify-between py-3">
        <span className="flex flex-row items-center gap-x-2">
          <FiStar color="#FFCE00" />
          32
        </span>
        <span className="flex flex-row items-center gap-x-2">
          <FiUnlock color="#63BF1F" />
          <FiLock color="#CC042A" />
        </span>
      </div>
    </li>
  );
};

export default Repository;
