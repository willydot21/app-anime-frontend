
export const changeSection = (
  target: HTMLInputElement,
  setState: React.Dispatch<React.SetStateAction<string>>,
  navigationBar: React.RefObject<HTMLDivElement>
) => {

  const elementName = target.textContent;

  const label =
    navigationBar.current
      ? navigationBar.current.firstChild as HTMLSpanElement
      : null
    ;

  if (elementName && label && navigationBar.current) {

    label.style.left = `${target.offsetLeft}px`;

    label.style.width = `${target.clientWidth}px`;

    setState(elementName);

  }

}

export const getSectionByName = (
  activeElement: string,
  navigationBar: React.RefObject<HTMLDivElement>
) => {

  if (navigationBar.current) {

    const element = navigationBar.current.querySelector(`button[name=${activeElement}]`);

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

    if (renderAgain) {
      changeSection(element as HTMLInputElement, setActive, navigationBar);
    }

    window.onresize = function () {
      changeSection(element as HTMLInputElement, setActive, navigationBar);
    }

  }

}

export const setActiveSection = (containerRef: React.RefObject<HTMLDivElement>, activeSection: string) => {

  if (containerRef.current) {

    const container = containerRef.current;

    container.querySelectorAll('.navigation-active-section').forEach(node => {
      node.classList.remove('navigation-active-section');
    })

    const active = container.querySelector(`div[section-name=${activeSection}]`) as HTMLDivElement;

    if (active) {

      active.classList.add('navigation-active-section');

    }

  }

}