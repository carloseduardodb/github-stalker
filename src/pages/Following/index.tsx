import { AxiosResponse } from "axios";
import Breadcrumb from "components/Breadcrumb";
import Follower from "components/Follower";
import MobileNavigator from "components/MobileNavigator";
import { useUser } from "hooks/useUser";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";

type followingProps = {
  id: number;
  login: string;
  avatar_url: string;
};

const Following = () => {
  const { user } = useUser();
  const [following, setFollowing] = useState<followingProps[]>();
  useEffect(() => {
    api
      .get(`/users/${user.login}/following`)
      .then((response: AxiosResponse) => {
        const notFilterFollowers = response.data as followingProps[];
        const filteredFollowers = notFilterFollowers.map(
          (follower: followingProps) => {
            return {
              login: follower.login,
              id: follower.id,
              avatar_url: follower.avatar_url
            };
          }
        );
        setFollowing(filteredFollowers);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2>{following?.length} seguindo</h2>
      </Breadcrumb>
      <ul className="pb-14">
        {following?.map((follower: followingProps) => (
          <li key={follower.id} className="border-b border-p-gray">
            <div className="px-7 py-5">
              <Follower
                login={follower.login}
                avatar_url={follower.avatar_url}
              />
            </div>
          </li>
        ))}
      </ul>
    </MobileNavigator>
  );
};

export default Following;
