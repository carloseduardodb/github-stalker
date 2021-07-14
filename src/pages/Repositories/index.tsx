import Breadcrumb from "components/Breadcrumb";
import MobileNavigator from "components/MobileNavigator";
import Repository from "components/Repository";
import React from "react";

const Repositories = () => {
  return (
    <div>
      <Breadcrumb>
        <h2>10 repositórios</h2>
      </Breadcrumb>
      <ul className="pt-2 pb-12">
        <Repository />
        <Repository />
        <Repository />
        <Repository />
      </ul>
      <MobileNavigator />
    </div>
  );
};

export default Repositories;
