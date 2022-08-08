
import './navigation.css'
import { useState, useRef, useEffect } from "react";
import { NavigationProps } from './navigation-types';
import NavigationBar from "./navigation-bar/navigation-bar";
import { changeSection, setActiveSection, setupOnChange } from "./navigation.utils";

const Navigation = ({ elements, defaultItem }: NavigationProps) => {

  const [active, setActive] = useState(defaultItem || Object.keys(elements)[0]);

  const navigationBar = useRef<HTMLDivElement>(null);

  const container = useRef<HTMLDivElement>(null);

  const handlerOnClick = function (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    changeSection(e.target as HTMLInputElement, setActive, navigationBar);
  }
  // handler to call changeSection onClick.

  useEffect(() => {

    setupOnChange(setActive, active, navigationBar);
    // when 'active' state change, call setup function and
    // and set window.onresize event, but with new active value.

    setActiveSection(container, active);
    // set active component and hidde inactive, so 
    // you don't have to reload again.

  }, [active]);

  useEffect(() => {

    setupOnChange(setActive, active, navigationBar, true);

  }, []); // on load.

  return (
    <div className="navigation">

      <NavigationBar
        active={active}
        sections={Object.keys(elements)}
        navigationBarRef={navigationBar}
        click={handlerOnClick}
      />

      <div className="navigation-container" ref={container} >
        {Object.values(elements)}
      </div>

    </div>
  )

}

export default Navigation;
