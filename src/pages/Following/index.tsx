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

type followingProps = {
  id: number;
  login: string;
  avatar_url: string;
};

const Following = () => {
  const { user } = useUser();
  const [following, setFollowing] = useState<followingProps[]>([]);
  const [index, setIndex] = useState(1);
  const [hashMore, setHashMore] = useState(true);

  async function handleMoreFollowing() {
    api
      .get(`/users/${user.login}/following?page=${index}`)
      .then((response: AxiosResponse) => {
        const notFilterFollowing = response.data as followingProps[];
        const filteredFollowing = notFilterFollowing.map(
          (follower: followingProps) => {
            return {
              login: follower.login,
              id: follower.id,
              avatar_url: follower.avatar_url
            };
          }
        );
        if (filteredFollowing.length === 0) {
          setHashMore(false);
          return;
        }
        if (filteredFollowing.length < 30) {
          setHashMore(false);
        }
        setFollowing([...following, ...filteredFollowing]);
        setIndex(index + 1);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  useEffect(() => {
    handleMoreFollowing();
  }, []);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2 className="text-lg">{user.following} seguindo</h2>
      </Breadcrumb>
      {following && (
        <InfinityScroll
          dataLength={following.length}
          next={handleMoreFollowing}
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
            {following?.map((follower: followingProps) => (
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

export default Following;
