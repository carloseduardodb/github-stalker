import React from "react";
import MobileNavigator from "components/MobileNavigator";
import TitleLeftStyle from "components/TitleLeftStyle";
import { FiArrowLeft, FiLogIn } from "react-icons/fi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "services/api";
import { AxiosError, AxiosResponse } from "axios";
import { useUser } from "hooks/useUser";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface userProps {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

const ExternalProfile = () => {
  const { login } = useParams();
  const [follower, setFollower] = useState<userProps>();
  const { handleModifyUser } = useUser();
  const history = useHistory();

  function modifyUser(userData: userProps) {
    handleModifyUser(userData);
    history.push("/home");
  }

  useEffect(() => {
    api
      .get(`/users/${login}`)
      .then((response: AxiosResponse) => {
        const result = response.data as userProps;
        const user = {
          login: result.login,
          name: result.name,
          email: result.email,
          location: result.location,
          company: result.company,
          bio: result.bio,
          avatar_url: result.avatar_url,
          followers_url: result.followers_url,
          following_url: result.following_url,
          organizations_url: result.organizations_url,
          starred_url: result.starred_url,
          public_repos: result.public_repos,
          public_gists: result.public_gists,
          followers: result.followers,
          following: result.following
        };
        setFollower(user);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  });
  return (
    <MobileNavigator>
      <section className="relative min-h-screen">
        <nav className="flex justify-between pt-5 px-5 pb-16 bg-p-black">
          <div className="flex items-center gap-x-3">
            <button onClick={history.goBack}>
              <FiArrowLeft size={20} color="#ffffff" />
            </button>
            <p className="font-bold text-sm">Stalkeando</p>
          </div>
          <button
            onClick={() => {
              follower && modifyUser(follower);
            }}
            className="flex items-center gap-x-2 text-white font-extralight"
          >
            Salvar
            <FiLogIn color="#5CBC29" />
          </button>
        </nav>
        <div className="flex items-center justify-center h-0 w-full">
          <img
            src={follower?.avatar_url}
            alt="Sua imagem"
            className="w-1/4 rounded-full border-4 border-white sm:w-32"
          />
        </div>
        <div className="px-7">
          <section className="mt-20">
            <TitleLeftStyle>
              <h1 className="text-2xl font-bold uppercase">{follower?.name}</h1>
            </TitleLeftStyle>
            <ul className="font-extralight">
              <li>{follower?.email}</li>
              <li>{follower?.location.replace(" - ", "/")}</li>
            </ul>
          </section>
          <section>
            <ul className="grid grid-cols-3 mt-10 bg-p-black-light sm:w-full sm:-ml-0 w-screen -ml-7 py-4">
              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">
                  {follower?.followers}
                </span>
                <span>Seguidores</span>
              </li>

              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">
                  {follower?.following}
                </span>
                <span>Seguindo</span>
              </li>

              <li className="flex flex-col text-center">
                <span className="text-4xl font-bold">
                  {follower?.public_repos}
                </span>
                <span>Repos</span>
              </li>
            </ul>
          </section>
          <section className="py-10 pb-20">
            <TitleLeftStyle>
              <h1 className="text-white text-2xl font-bold uppercase">Bio</h1>
            </TitleLeftStyle>
            <p className="text-white font-extralight">{follower?.bio}</p>
          </section>
        </div>
      </section>
    </MobileNavigator>
  );
};

export default ExternalProfile;
