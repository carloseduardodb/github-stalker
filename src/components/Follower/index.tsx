import TitleLeftStyle from "components/TitleLeftStyle";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

type followerProps = {
  login: string;
  avatar_url: string;
};

const Follower: React.FC<followerProps> = ({ login, avatar_url }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="gap-x-3 flex items-center">
        <TitleLeftStyle>
          <img
            src={avatar_url}
            alt="Sua imagem"
            className="w-1/5 sm:w-14 rounded-full border-2 border-white"
          />
          <p className="break-words" style={{ minWidth: "160px" }}>
            #{login}
          </p>
        </TitleLeftStyle>
      </div>
      <Link to={`externalProfile/${login}`}>
        <FiArrowRight size={20} color="#ffffff" />
      </Link>
    </div>
  );
};

export default Follower;
