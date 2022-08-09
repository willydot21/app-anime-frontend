
import PostError from "./onError";
import { Navigate } from "react-router-dom";
import { ChangePasswordHandlerTypes } from "./hook-types";
import { getFetchOptions, baseUrl, authUrl } from "../../services/constants";

const getBodyFromForm = (form: HTMLFormElement, method: string) => {

  if (method === 'register') {
    const [username, email, password] = form.querySelectorAll('input');
    return JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    });
  }

  const [email, password] = form.querySelectorAll('input');
  return JSON.stringify({
    email: email.value,
    password: password.value
  });

}

export const removePreviousSpan = (form: HTMLFormElement) => {

  form.querySelectorAll('.input-error-message').forEach(error => error.remove());

}

export const registration = async (
  method: string,
  form: HTMLFormElement,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
) => {

  const req = await fetch(`${baseUrl}/${method}`, getFetchOptions(getBodyFromForm(form, method)));

  const res = await req.json();

  if ((res.error !== null) || (res.error === true)) PostError.HandlerPostError(form, res);
  else {
    setLogged(true);
    localStorage.setItem('refresh-token', res.data.refreshToken)
    Navigate({ to: '/' });
  }

}

export const handleChangePassword = async (
  form: HTMLFormElement
) => {

  const inputOldPass = form.querySelectorAll('input[name=password]')[0] as HTMLInputElement;

  const oldPassword = inputOldPass.value;

  const inputNewPass = form.querySelectorAll('input[name=new-password]')[0] as HTMLInputElement;

  const newPassword = inputNewPass.value;

  const url = `${authUrl}/update`;

  const body = JSON.stringify({
    password: oldPassword,
    credential: {
      name: 'password',
      value: newPassword
    }
  });

  const req = await fetch(url, getFetchOptions(body, 'PUT'));

  const json: { error: boolean, data: string } | { data: string, success: true } = await req.json();

  if ((json as ChangePasswordHandlerTypes['resSuccess']).success) return json;

  if (json.data.indexOf('Password is not valid')) {

    return PostError.handleError(form, { error: json.data, code: 'IPW400' }, 'new-password');

  } else if (json.data.indexOf('Access denied')) {

    return PostError.handleError(form, { error: json.data, code: 'AD403' }, 'password');

  }

}

export const handleGetRefreshToken = async () => {

  const url = baseUrl + '/refresh-token';

  const body = JSON.stringify({
    refreshToken: localStorage.getItem('refresh-token')
  });

  const req = await fetch(url, getFetchOptions(body, 'POST'));

  const json = await req.json();

  localStorage.setItem('refresh-token', json.data.refreshToken);

}