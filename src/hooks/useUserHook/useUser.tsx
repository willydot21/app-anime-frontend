
import React, { useState } from "react";
import { baseUrl } from "../../services/constants";
import { UseUser, ChangePasswordHandlerTypes } from "./hook-types";
import { handleGetRefreshToken, handleChangePassword, registration } from "./utils";

export default function useUser(): UseUser {

  const [logged, setLogged] = useState(false);

  const [data, setData] = useState({});

  const getRefreshToken = handleGetRefreshToken;

  const register = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    registration('register', form, setLogged);

  }
  // require call this in submit ctx

  const login = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    registration('login', form, setLogged);

  }
  // require call this in submit ctx

  const logout = () => {

    setLogged(false);

    localStorage.clear();

    fetch(baseUrl + '/logout', { credentials: "include" }).catch(err => console.error(err));

  }

  const changePassword = async (
    e: React.FormEvent<HTMLFormElement>,
    setNavigate: React.Dispatch<React.SetStateAction<boolean>>
  ) => {

    e.preventDefault();

    await getRefreshToken();

    const res = await handleChangePassword(e.target as HTMLFormElement);

    if ((res as ChangePasswordHandlerTypes['resSuccess']).success) setNavigate(true);

  }
  // require call this in submit ctx

  const deleteAccout = () => {

  }

  const setupUser = async () => {

    if (localStorage.getItem('refresh-token')) {

      await getRefreshToken();

      setLogged(true);

    }

  }

  return {
    logged: [logged, setLogged],
    data: [data, setData],
    register,
    login,
    logout,
    changePassword,
    getRefreshToken,
    setupUser
  }

}