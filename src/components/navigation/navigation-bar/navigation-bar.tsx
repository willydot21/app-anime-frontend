
import './navigation-bar.css';
import { v4 as uuid } from 'uuid';

const NavigationBar = ({ sections, navigationBarRef, click }: {
  sections: string[],
  navigationBarRef: React.RefObject<HTMLDivElement>,
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {

  return (
    <div className="navigation-bar" ref={navigationBarRef} >
      <span className="navigation-bar-label" />
      {
        sections.map(section => (
          <button className="navigation-bar-button" onClick={click} name={section} key={uuid()}>
            {section}
          </button>
        ))
      }
    </div>
  );

}

export default NavigationBar;