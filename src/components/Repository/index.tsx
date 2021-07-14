import TitleLeftStyle from "components/TitleLeftStyle";
import React from "react";
import { FiLock, FiStar, FiUnlock } from "react-icons/fi";

type repositoryProps = {
  name: string;
  description: string;
  stargazers_count: number;
};

const Repository: React.FC<repositoryProps> = ({
  name,
  description,
  stargazers_count
}) => {
  return (
    <li className="px-7 py-4 border-b border-p-gray">
      <TitleLeftStyle>
        <p className="font-bold">{name}</p>
      </TitleLeftStyle>
      <span>{description}</span>
      <div className="flex flex-row justify-between py-3">
        <span className="flex flex-row items-center gap-x-2">
          <FiStar color="#FFCE00" />
          {stargazers_count}
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
