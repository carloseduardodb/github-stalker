import Breadcrumb from "components/Breadcrumb";
import Follower from "components/Follower";
import MobileNavigator from "components/MobileNavigator";
import React from "react";

const Followers = () => {
  return (
    <div>
      <Breadcrumb>10 seguidores</Breadcrumb>
      <ul className="pb-14">
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
        <li className="border-b border-p-gray">
          <div className="px-7 py-5">
            <Follower />
          </div>
        </li>
      </ul>
      <MobileNavigator />
    </div>
  );
};

export default Followers;
