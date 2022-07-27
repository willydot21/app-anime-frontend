
import PostError from "./error";
import { Navigate } from "react-router-dom";

const registration = async (
  method:string, 
  form:HTMLFormElement, 
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>]
) => {

  var body = {}

  const [ logged, setLogged ] = loginState;

  if ( method === 'register' ) {

    const [username, email, password] = form.querySelectorAll('input');
    body = {
      username: username.value,
      email: email.value,
      password: password.value
    }

  } else {

    const [email, password] = form.querySelectorAll('input');
    body = {
      email: email.value,
      password: password.value
    }

  }

  // remember to change url , if it want to test on mobile.
  const req = await fetch('http://localhost:3001/'+method, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const res = await req.json();

  if (res.error !== null) PostError.HandlerPostError(form, res);
  else {
    setLogged(true);
    Navigate({ to:'/' });
  }

}
 
const loginUser = async (
  e: React.FormEvent<HTMLFormElement>, 
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>]
) => {

  e.preventDefault();

  const form = e.currentTarget;

  await registration('login', form, loginState);

}

const registerUser = async (
  e: React.FormEvent<HTMLFormElement>,
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>]
) => {

  e.preventDefault();

  const form = e.currentTarget;

  await registration('register', form, loginState);

}

export {
  registerUser,
  loginUser
}