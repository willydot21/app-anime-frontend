
export const changeSection = (
  target:  HTMLInputElement, 
  setState: React.Dispatch<React.SetStateAction<string>>,
  navigationBar: React.RefObject<HTMLDivElement>
) => {

  const elementName = target.textContent;

  const label = 
    navigationBar.current
    ? navigationBar.current.firstChild as HTMLSpanElement
    : null
  ;

  if ( elementName && label && navigationBar.current) {

    label.style.left = `${target.offsetLeft}px`;

    label.style.width = `${target.clientWidth}px`;

    navigationBar.current.querySelectorAll('.navigation-bar-active')
      .forEach( button => {
        button.classList.remove('navigation-bar-active');
      });

    target.classList.add('navigation-bar-active');

    setState( elementName );

  }

}

export const getSectionByName = (  
  activeElement: string,
  navigationBar: React.RefObject<HTMLDivElement>
) => {

  if ( navigationBar.current ) {

    const element = navigationBar.current.querySelector( `button[name=${ activeElement }]` );

    return element;

  }

  return null;

}

export const setupOnChange = (
  setActive: React.Dispatch<React.SetStateAction<string>>,
  activeElement: string,
  navigationBar: React.RefObject<HTMLDivElement>,
  renderAgain: Boolean = false
) => {

  const element = getSectionByName(activeElement, navigationBar);

  if (element) {

    if ( renderAgain ) { 
      changeSection(element as HTMLInputElement, setActive, navigationBar); 
    }

    window.onresize = function () {
      changeSection(element as HTMLInputElement, setActive, navigationBar);
    }

  }

}