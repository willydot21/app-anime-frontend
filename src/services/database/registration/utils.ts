
export const getCurrentSession = (setLogged:React.Dispatch<React.SetStateAction<boolean>>) => {

  const userSession = window.localStorage.getItem('loggedUserInfo');

  if (userSession) {

    setLogged(true);

    return userSession;
    
  }

  return null;

}

export const handleLogout = (setLogged:React.Dispatch<React.SetStateAction<boolean>>) => {

  setLogged(false);

  window.localStorage.clear();

}