import { AxiosResponse } from "axios";
import Breadcrumb from "components/Breadcrumb";
import MobileNavigator from "components/MobileNavigator";
import Repository from "components/Repository";
import { useUser } from "hooks/useUser";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";

type repositoryProps = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};

const Repositories = () => {
  const { user } = useUser();
  const [repositories, setRepositories] = useState<repositoryProps[]>();
  useEffect(() => {
    api
      .get(`users/${user.login}/repos`)
      .then((response: AxiosResponse) => {
        const notFilterRepositories = response.data as repositoryProps[];
        const filterRepositories = notFilterRepositories.map(
          (repository: repositoryProps) => {
            return {
              id: repository.id,
              name: repository.name,
              description: repository.description,
              stargazers_count: repository.stargazers_count
            };
          }
        );
        setRepositories(filterRepositories);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }, [user]);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2>{repositories?.length} repositórios</h2>
      </Breadcrumb>
      <ul className="pt-2 pb-12">
        {repositories?.map((repositorie: repositoryProps) => (
          <Repository
            key={repositorie.id}
            name={repositorie.name}
            description={repositorie.description}
            stargazers_count={repositorie.stargazers_count}
          />
        ))}
      </ul>
    </MobileNavigator>
  );
};

export default Repositories;
