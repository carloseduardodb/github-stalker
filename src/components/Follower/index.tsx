import TitleLeftStyle from "components/TitleLeftStyle";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Follower = () => {
  return (
    <li className="flex flex-row justify-between items-center">
      <div className="gap-x-3 flex items-center">
        <TitleLeftStyle>
          <img
            src="https://avatars.githubusercontent.com/u/50811913?v=4"
            alt="Sua imagem"
            className="w-1/5 rounded-full border-2 border-white"
          />
          <p>#anittonveiga</p>
        </TitleLeftStyle>
      </div>
      <a href="#">
        <FiArrowRight size={20} color="#ffffff" />
      </a>
    </li>
  );
};

export default Follower;
