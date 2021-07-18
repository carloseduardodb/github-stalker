import { AxiosResponse } from "axios";
import Breadcrumb from "components/Breadcrumb";
import MobileNavigator from "components/MobileNavigator";
import Repository from "components/Repository";
import { useUser } from "hooks/useUser";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "services/api";
import InfinityScroll from "react-infinite-scroll-component";

type repositoryProps = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};

const Repositories = () => {
  const { user } = useUser();
  const [repositories, setRepositories] = useState<repositoryProps[]>([]);
  const [index, setIndex] = useState(1);
  const [hashMore, setHashMore] = useState(true);

  async function handleMoreRepositories() {
    api
      .get(`users/${user.login}/repos?page=${index}`)
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
        if (filterRepositories.length === 0) {
          setHashMore(false);
          return;
        }
        if (filterRepositories.length < 30) {
          setHashMore(false);
        }
        setRepositories([...repositories, ...filterRepositories]);
        setIndex(index + 1);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
  useEffect(() => {
    handleMoreRepositories();
  }, [user]);
  return (
    <MobileNavigator>
      <Breadcrumb>
        <h2 className="text-lg">{user.public_repos} repositórios</h2>
      </Breadcrumb>
      <InfinityScroll
        dataLength={repositories.length}
        next={handleMoreRepositories}
        hasMore={hashMore}
        loader={
          <p style={{ textAlign: "center" }}>
            <h4>Loading...</h4>
          </p>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Sem mais!</b>
          </p>
        }
      >
        {repositories.length > 0 && (
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
        )}
      </InfinityScroll>
    </MobileNavigator>
  );
};

export default Repositories;
