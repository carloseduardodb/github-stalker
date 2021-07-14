import MobileNavigator from "components/MobileNavigator";
import TitleLeftStyle from "components/TitleLeftStyle";
import React from "react";
import { FiLogOut } from "react-icons/fi";

const Home = () => {
  return (
    <section className="relative min-h-screen">
      <main
        className="flex justify-between items-center w-full p-5 
      bg-p-black pb-28"
      >
        <span className="text-xl font-bold">#nomedousuariodogit</span>
        <a href="#" className="flex gap-x-2 font-light text-white">
          Sair <FiLogOut color="#D03434" size={25} />
        </a>
      </main>
      <div className="flex items-center justify-center h-0 w-full">
        <img
          src="https://avatars.githubusercontent.com/u/50811913?v=4"
          alt="Sua imagem"
          className="w-1/4 rounded-full border-4 border-white"
        />
      </div>
      <div className="px-7">
        <section className="mt-20">
          <TitleLeftStyle>
            <h1 className="text-2xl font-bold uppercase">Carlos Eduardo</h1>
          </TitleLeftStyle>
          <ul className="font-extralight">
            <li>carloscangere@hotmail.com</li>
            <li>Itaí/SP</li>
          </ul>
        </section>
        <section>
          <ul className="grid grid-cols-3 mt-10 bg-p-black-light w-screen -ml-7 py-4">
            <li className="flex flex-col text-center">
              <span className="text-4xl font-bold">32</span>
              <span>Seguidores</span>
            </li>

            <li className="flex flex-col text-center">
              <span className="text-4xl font-bold">32</span>
              <span>Seguindo</span>
            </li>

            <li className="flex flex-col text-center">
              <span className="text-4xl font-bold">10</span>
              <span>Repos</span>
            </li>
          </ul>
        </section>
        <section className="py-10 pb-20">
          <TitleLeftStyle>
            <h1 className="text-white text-2xl font-bold uppercase">Bio</h1>
          </TitleLeftStyle>
          <p className="text-white font-extralight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sodales pulvinar purus, in pretium ligula tristique rhoncus. Nam nec
            diam id felis viverra vestibulum.
          </p>
        </section>
      </div>
      <MobileNavigator />
    </section>
  );
};

export default Home;
