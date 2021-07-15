import { AxiosResponse } from "axios";
import Breadcrumb from "components/Breadcrumb";
import UserItem from "components/UserItem";
import MobileNavigator from "components/MobileNavigator";
import { useUser } from "hooks/useUser";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";
import InfinityScroll from "react-infinite-scroll-component";

type followerProps = {
  id: number;
  login: string;
  avatar_url: string;
};

type repositoryProps = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};

const Followers = () => {
  const { user } = useUser();
  const [followers, setFollowers] = useState<followerProps[]>([]);
  const [index, setIndex] = useState(1);
  const [hashMore, setHashMore] = useState(true);

  async function handleMoreFollowers() {
    api
      .get(`/users/${user.login}/followers?page=${index}`)
      .then((response: AxiosResponse) => {
        const notFilterFollowers = response.data as followerProps[];
        const filteredFollowers = notFilterFollowers.map(
          (follower: followerProps) => {
            return {
              login: follower.login,
              id: follower.id,
              avatar_url: follower.avatar_url
            };
          }
        );
        if (filteredFollowers.length === 0) {
          setHashMore(false);
          return;
        }
        if (filteredFollowers.length < 30) {
          setHashMore(false);
        }
        setFollowers([...followers, ...filteredFollowers]);
        setIndex(index + 1);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleMoreFollowers();
  }, []);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2 className="text-lg">{user.followers} seguidores</h2>
      </Breadcrumb>
      {followers && (
        <InfinityScroll
          dataLength={followers.length}
          next={handleMoreFollowers}
          hasMore={hashMore}
          loader={
            <p style={{ textAlign: "center" }}>
              <h4>Loading...</h4>
            </p>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Sem Mais!</b>
            </p>
          }
        >
          <ul className="pb-14">
            {followers?.map((follower: followerProps) => (
              <li key={follower.id} className="border-b border-p-gray">
                <div className="px-7 py-5">
                  <UserItem
                    login={follower.login}
                    avatar_url={follower.avatar_url}
                  />
                </div>
              </li>
            ))}
          </ul>
        </InfinityScroll>
      )}
    </MobileNavigator>
  );
};

export default Followers;
