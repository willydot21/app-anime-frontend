
import React, { useRef, useEffect } from "react";

const removeAlert = ($this: React.RefObject<HTMLDivElement>) => {
  try {
    const timeOut = setTimeout(() => {
      if ($this && $this.current) $this.current.remove();
      clearTimeout(timeOut);
    }, 2000);
  } catch (error) { console.log(error); }
}

const AlertAccount = () => {

  const $this = useRef<HTMLDivElement>(null);

  useEffect(() => removeAlert($this), []);

  return (
    <div className="alert alert-warning d-flex align-items-center account-alert" role="alert" ref={$this} >
      <p> Crea una cuenta para poder hacer seguimiento de tus animes! </p>
    </div>
  );
}

export default AlertAccount;