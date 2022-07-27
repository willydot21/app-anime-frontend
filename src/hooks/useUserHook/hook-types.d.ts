import React from "react";

export interface User {

}

export interface UseUser {
  logged: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  data: [User, React.Dispatch<React.SetStateAction<User>>]
  getUserProfile: () => void;
  register: (e:React.FormEvent<HTMLFormElement>) => void;
  login: (e:React.FormEvent<HTMLFormElement>) => void;
  logout: () => void;
}