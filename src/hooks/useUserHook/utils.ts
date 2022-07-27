
import PostError from "./onError";
import { Navigate } from "react-router-dom";

const getBodyFromForm = (form:HTMLFormElement, method:string) => {

  if ( method === 'register' ) {
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

export const registration = async (  
  method: string, 
  form: HTMLFormElement,
  setLogged: React.Dispatch<React.SetStateAction<boolean>>
) => {

  const req = await fetch('http://localhost:3001/'+method, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: getBodyFromForm(form, method),
  });

  const res = await req.json();

  if (res.error !== null) PostError.HandlerPostError(form, res);
  else {
    setLogged(true);
    Navigate({ to:'/' });
  }

}
