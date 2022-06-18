import PostError from "./error";

const registration = async (method:string, form:HTMLFormElement) => {

  var body = {};

  if ( method === 'register' ) {

    const [username, email, password] = form.querySelectorAll('input');
    body = {
      username: username.value,
      email: email.value,
      password: password.value
    };

  } else {

    const [email, password] = form.querySelectorAll('input');
    body = {
      email: email.value,
      password: password.value
    };

  }

  // remember to change url , if it want to test on mobile.
  const req = await fetch('http://localhost:3001/'+method, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  const res = await req.json();

  if( res.error !== null ){
    PostError.HandlerPostError(form, res);
  } else {
    window.location.pathname = '/home';
  }

}
 
const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  const form = e.currentTarget;

  await registration('login', form);

}

const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {

  e.preventDefault();

  const form = e.currentTarget;

  await registration('register', form);

}

export {
  registerUser,
  loginUser
}