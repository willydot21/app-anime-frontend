
var prevCursorY=0, originalTop=0, hasScrolled=false;

function setElementCursor(clientY:number, form:HTMLFormElement) {
  form.style.top = (form.offsetTop - clientY) + 'px';
}

function dragMouseDown(e:MouseEvent, form:HTMLFormElement) {

  e = e || window.event;
  form.style.transitionDuration = 'unset';

  prevCursorY = e.clientY;

  document.onmousemove = (ev) => dragElement(ev, form);
  form.onmouseup = () => dragStop(form);
  document.onmouseleave =  () => dragStop(form);

}

function dragElement(e:MouseEvent, form:HTMLFormElement) {

  e = e || window.event;
  e.preventDefault();
  hasScrolled = true;

  const clientY = prevCursorY - e.clientY;
  prevCursorY = e.clientY;

  setElementCursor(clientY, form);

}

function dragStop(form:HTMLFormElement) {

  form.onmouseup = null;
  form.style.transitionDuration = '.3s';
  document.onmousemove = null;
  document.onmouseleave = null;

  if ((form.offsetTop>=(originalTop*1.5)) && hasScrolled) {
    form.style.top = '100%';
  }
  // check if is scrolled to limit.

  if (form.offsetTop <= document.documentElement.offsetTop+100) {
    form.style.top = '0%';
    console.log(document.documentElement.offsetTop, form.offsetTop);

  }

  else if (
    ((form.offsetTop < originalTop) || 
    !(form.offsetTop>=(originalTop*1.5))) && 
    hasScrolled
  ) {
    form.style.top = '40%';
  }
  // check if is scrolling top.

}

export function showFiltersForm(form:React.RefObject<HTMLFormElement>) {

  if (form.current) {

    const $this = form.current;

    $this.style.top = '40%';

  }

}

export const setupDraggableForm = (form:React.RefObject<HTMLFormElement>) => {

  if (form.current) {

    const $this = form.current;

    originalTop = $this.offsetTop;

    $this.style.top = '100%';
    // hide form.

    $this.onmousedown = (e) => dragMouseDown(e, $this);

  }

}