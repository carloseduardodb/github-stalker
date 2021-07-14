import MobileNavigator from "components/MobileNavigator";
import TitleLeftStyle from "components/TitleLeftStyle";
import { useUser } from "hooks/useUser";
import React, { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

const Home = () => {
  const { user, handleExitUser } = useUser();
  return (
    <MobileNavigator>
      <section className="relative min-h-screen">
        <main
          className="flex justify-between items-center w-full p-5 
      bg-p-black pb-28"
        >
          <span className="text-xl font-bold">#{user.login}</span>
          <button
            onClick={handleExitUser}
            className="flex gap-x-2 font-light text-white"
          >
            Sair <FiLogOut color="#D03434" size={25} />
          </button>
        </main>
        <div className="flex items-center justify-center h-0 w-full">
          <img
            src={user.avatar_url}
            alt="Sua imagem"
            className="w-1/4 rounded-full border-4 border-white"
          />
        </div>
        <div className="px-7">
          <section className="mt-20">
            <TitleLeftStyle>
              <h1 className="text-2xl font-bold uppercase">{user.name}</h1>
            </TitleLeftStyle>
            <ul className="font-extralight">
              <li>{user.email}</li>
              <li>{user.location.replace(" - ", "/")}</li>
            </ul>
          </section>
          <section>
            <ul className="grid grid-cols-3 mt-10 bg-p-black-light w-screen -ml-7 py-4">
              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">{user.followers}</span>
                <span>Seguidores</span>
              </li>

              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">{user.following}</span>
                <span>Seguindo</span>
              </li>

              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">{user.public_repos}</span>
                <span>Repos</span>
              </li>
            </ul>
          </section>
          <section className="py-10 pb-20">
            <TitleLeftStyle>
              <h1 className="text-white text-2xl font-bold uppercase">Bio</h1>
            </TitleLeftStyle>
            <p className="text-white font-extralight">{user.bio}</p>
          </section>
        </div>
      </section>
    </MobileNavigator>
  );
};

export default Home;
