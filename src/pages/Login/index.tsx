import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import githubLogo from "./../../assets/github-logo.svg";
import { FiArrowRight } from "react-icons/fi";
import Button from "../../components/Button";
import api from "services/api";
import { AxiosError, AxiosResponse } from "axios";
import { useUser } from "hooks/useUser";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

type errorProps = {
  active: Boolean;
  message: string;
};

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

const Login = () => {
  const defaultError = { active: false, message: "" };
  const [username, setUsername] = useState("");
  const { handleModifyUser, user } = useUser();
  const [alertError, setAlertError] = useState<errorProps>(defaultError);

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  });

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (!username) {
      setAlertError({ active: true, message: "Campo Obrigatório" });
      return;
    }
    api
      .get(`/users/${username}`)
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
        handleModifyUser(user);
      })
      .catch((err: AxiosError) => {
        setAlertError({ active: true, message: "Esse usuário não existe" });
        return;
      });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-10 px-10">
      <img src={githubLogo} alt="" />
      <form className="flex flex-col gap-5 w-full sm:max-w-xs">
        <Input
          type="text"
          value={username}
          placeholder="Usuário"
          onChange={(event: any) => {
            setUsername(event.target.value);
            alertError &&
              setAlertError({ active: false, message: "Campo Obrigatório" });
          }}
          error={alertError}
        />
        <Button type="submit" onClick={handleLogin}>
          Entrar <FiArrowRight />
        </Button>
      </form>
    </div>
  );
};

export default Login;
