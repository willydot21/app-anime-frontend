
import { useState, useRef, useEffect } from "react";
import { NavigationProps } from './navigation-types';
import NavigationBar from "./navigation-bar/navigation-bar";
import { changeSection, setupOnChange } from "./navigation.utils";

const Navigation = ({ elements, defaultItem }:NavigationProps) => {

  const [active, setActive] = useState( defaultItem || Object.keys(elements)[0] );

  const navigationBar = useRef<HTMLDivElement>(null);

  const handlerOnClick = function(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){ 
    changeSection( e.target as HTMLInputElement, setActive, navigationBar ); 
  }
  // handler to call changeSection onClick.

  useEffect( () => {

    setupOnChange( setActive, active, navigationBar );
    // when 'active' state change, call setup function and
    // and set window.onresize event, but with new active value.

  }, [active]);

  useEffect( () => {

    setupOnChange( setActive, active, navigationBar, true );
    
  }, []); // on load.

  return (
    <div className="navigation">

      <NavigationBar 
        sections={ Object.keys(elements) }
        navigationBarRef={ navigationBar }
        click={ handlerOnClick }
      />

      <div className="navigation-container">
        { elements[ active ] }
      </div>

    </div>
  )

}

export default Navigation;
