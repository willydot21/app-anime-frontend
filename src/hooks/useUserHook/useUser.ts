
import { useState } from "react";
import { UseUser } from "./hook-types";
import { registration } from "./utils";

export default function useUser():UseUser {
  
  const [logged, setLogged] = useState(false);

  const [data, setData] = useState({});

  const register = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    registration('register', form, setLogged);

  }
  // require call this in submit ctx

  const login = (e:React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const form = e.target as HTMLFormElement;

    registration('login', form, setLogged);

  }
  // require call this in submit ctx

  const logout = () => {

    setLogged(false);

    fetch('http://localhost:3001/logout', { credentials:"include" }).catch( err => console.error(err) );

  }

  const changePass = () => {
    
  }

  const deleteAccout = () => {

  }

  const getUserProfile = () => {

  }

  return {
    logged:[logged, setLogged],
    data:[data, setData],
    getUserProfile,
    register,
    login,
    logout
  }

}