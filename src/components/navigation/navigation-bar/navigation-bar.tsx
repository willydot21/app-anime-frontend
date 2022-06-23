
import './navigation-bar.css';

const NavigationBar = ({ sections, navigationBarRef, click }:{
  sections: string[],
  navigationBarRef: React.RefObject<HTMLDivElement>,
  click: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => {

  return (
    <div className="navigation-bar" ref={ navigationBarRef } >
      <span className="navigation-bar-label"/>
      {
        sections.map( section => (
          <button className="navigation-bar-button" onClick={ click } name={ section } >
            { section }
          </button>
        ) )
      }
    </div>
  );

}

export default NavigationBar;