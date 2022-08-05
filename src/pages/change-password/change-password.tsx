
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import RegistrationWrapper from "../../components/form/registration/wrapper-registration";
import RegistrationButton from "../../components/input/button/registration-button/registration-button";
import PlaceHolderInput from "../../components/input/text/placeholder-input/placeholder-input";
import { ChangePasswordFunction, ChangePasswordHandlerTypes, UseUser } from "../../hooks/useUserHook/hook-types";

const handleChangePass = async (
  e: React.FormEvent<HTMLFormElement>,
  handleChangePassword: any
) => {

  const res = await handleChangePassword(e);

  if ((res as ChangePasswordHandlerTypes['resSuccess']).success) {

    Navigate({ to: "/" });

  }

}

const AppChangePassword = ({ logged, handleChangePassword }: { logged: boolean, handleChangePassword: ChangePasswordFunction }) => {

  const [navigate, setNavigate] = useState(false);

  if (logged && !navigate) {
    return (
      <RegistrationWrapper callbackSubmit={(e) => handleChangePassword(e, setNavigate)}>
        <PlaceHolderInput
          placeholder="password"
          name="password"
          type="password" />
        <PlaceHolderInput
          placeholder="new password"
          name="new-password"
          type="password" />
        <RegistrationButton name="SAVE" />
      </RegistrationWrapper>
    );
  }

  return <Navigate to="/" />;

}

export default AppChangePassword;