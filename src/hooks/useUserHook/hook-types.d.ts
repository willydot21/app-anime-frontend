import React from "react";

export type ChangePasswordFunction = (e: React.FormEvent<HTMLFormElement>, setNavigate: React.Dispatch<React.SetStateAction<boolean>>) => void;

export interface UseUser {
  logged: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  data: [User, React.Dispatch<React.SetStateAction<User>>]
  register: (e: React.FormEvent<HTMLFormElement>) => void;
  login: (e: React.FormEvent<HTMLFormElement>) => void;
  logout: () => void;
  changePassword: ChangePasswordFunction;
  getRefreshToken: () => void;
  setupUser: () => void;
}

export interface ChangePasswordHandlerTypes {
  resError: {
    error: boolean;
    data: string;
  }
  resSuccess: {
    success: boolean;
    data: string;
  }
}