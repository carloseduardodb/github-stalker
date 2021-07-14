import { AxiosResponse } from "axios";
import Breadcrumb from "components/Breadcrumb";
import Follower from "components/Follower";
import MobileNavigator from "components/MobileNavigator";
import { useUser } from "hooks/useUser";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";

type followerProps = {
  id: number;
  login: string;
  avatar_url: string;
};

const Followers = () => {
  const { user } = useUser();
  const [followers, setFollowers] = useState<followerProps[]>();
  useEffect(() => {
    api
      .get(`/users/${user.login}/followers`)
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
        setFollowers(filteredFollowers);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, []);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2>{followers?.length} seguidores</h2>
      </Breadcrumb>
      <ul className="pb-14">
        {followers?.map((follower: followerProps) => (
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

export default Followers;
