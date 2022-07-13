
var scrollTimer: number | NodeJS.Timeout = -1;

function scrollStop(activatorText:HTMLParagraphElement) {

  activatorText.classList.remove('activator-text-active');

}

function handleScroll(activatorText:HTMLParagraphElement) {

  activatorText.classList.add('activator-text-active');

  if (scrollTimer === -1) clearTimeout(scrollTimer);

  scrollTimer = setTimeout(() => scrollStop(activatorText), 1000);

}

export function showFiltersForm(
  form:React.RefObject<HTMLFormElement>, 
  formTop:number,
  setActive:React.Dispatch<React.SetStateAction<boolean>>
) {

  if (form.current) {

    const $this = form.current;

    if ($this.offsetTop === formTop) {

      $this.style.top = '100%';

      document.body.style.overflow = 'auto';

      setActive(false);

    } else {
      
      $this.style.top = formTop+'px';

      document.body.style.overflow = 'hidden';

      setActive(true);
    
    }

  }

}

export function setupActivator(activatorRef:React.RefObject<HTMLButtonElement>) {

  if (activatorRef.current) {

    const activatorText = activatorRef.current.querySelector('.activator-text') as HTMLParagraphElement;

    document.addEventListener('scroll', () => handleScroll(activatorText));

  }

}