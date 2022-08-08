
import './navigation-bar.css';
import { v4 as uuid } from 'uuid';

const NavigationBar = ({ sections, navigationBarRef, click, active }: {
  sections: string[],
  navigationBarRef: React.RefObject<HTMLDivElement>,
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  active: string
}) => {
  return (
    <div className="navigation-bar" ref={navigationBarRef} >
      <span className="navigation-bar-label" />
      {
        sections.map(section => {
          const activeClassButton = active === section ? 'navigation-bar-active' : ''
          return (
            <button className={"navigation-bar-button " + activeClassButton} onClick={click} name={section} key={uuid()}>
              {section}
            </button>
          );
        })
      }
    </div>
  );

}

export default NavigationBar;