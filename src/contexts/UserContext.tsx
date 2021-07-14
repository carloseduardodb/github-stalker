import React, { useEffect } from "react";
import { useState } from "react";
import { createContext, ReactNode } from "react";

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

interface userContextType {
  user: userProps;
  handleModifyUser: (user: userProps) => void;
  handleExitUser: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as userContextType);

export function UserContextProvider(props: UserContextProviderProps) {
  const [user, setUser] = useState<userProps | any>(() => {
    const storageUser = localStorage.getItem("user");
    if (storageUser) {
      return JSON.parse(JSON.parse(JSON.parse(storageUser)));
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function handleModifyUser(user: userProps) {
    setUser(user);
  }

  function handleExitUser() {
    localStorage.removeItem("user");
    window.location.href = "/login";
  }

  return (
    <UserContext.Provider
      value={{ user: user, handleModifyUser, handleExitUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
