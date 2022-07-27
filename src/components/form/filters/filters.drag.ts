
var prevCursorY=0;

function canSetDrag (form:HTMLFormElement) {

  const modals = form.querySelectorAll('.modal.fade.show');

  return !(modals.length > 0) && !form.classList.contains('filters-focus');

}

function setElementCursor(clientY:number, form:HTMLFormElement) {
  form.style.top = (form.offsetTop - clientY) + 'px';
}

function dragMouseOut(ev:MouseEvent, form:HTMLFormElement, originalTop:number, setActive:React.Dispatch<React.SetStateAction<boolean>>) {

  if (!form.contains(ev.target as Element)) {

    dragStop(form, originalTop, setActive);

  }

}

function dragStartTouch(e:TouchEvent, form:HTMLFormElement, originalTop:number, setActive:React.Dispatch<React.SetStateAction<boolean>>) {

  if (canSetDrag(form)) {

    e = e || window.event;

    prevCursorY = e.touches[0].clientY;

    form.style.transitionDuration = 'unset';

    document.ontouchmove = (ev) => dragElement(ev.touches[0].clientY, form);
    form.ontouchend = () => dragStop(form, originalTop, setActive);
  
  }

}

function dragStartMouse(e:MouseEvent, form:HTMLFormElement, originalTop:number, setActive:React.Dispatch<React.SetStateAction<boolean>>) {

  if (canSetDrag(form)) {

    e = e || window.event;

    prevCursorY = e.clientY;

    form.style.transitionDuration = 'unset';

    document.onmousemove = (ev) => dragElement(ev.clientY, form);
    form.onmouseup = () => dragStop(form, originalTop, setActive);
    document.onmouseleave = () => dragStop(form, originalTop, setActive);
    document.onmouseout = (ev) => dragMouseOut(ev, form, originalTop, setActive);

  }

}

function dragElement(evClientY:number, form:HTMLFormElement) {

  const clientY = prevCursorY - evClientY;

  prevCursorY = evClientY;

  setElementCursor(clientY, form);

}

function dragStop(form:HTMLFormElement, originalTop:number, setActive:React.Dispatch<React.SetStateAction<boolean>>) {

  form.style.transitionDuration = '.3s';
  form.onmouseup = null;
  form.ontouchend = null;
  document.onmousemove = null;
  document.onmouseleave = null;
  document.onmouseout = null;
  document.ontouchmove = null;

  if (form.offsetTop>=(originalTop*1.5)) {
    
    form.style.top = '100%';

    document.body.style.overflow = 'auto';
    
    setActive(false);

  } else if (!form.classList.contains('filters-focus')) {
    
    form.style.top = originalTop+'px';
    
  }
  // check if is scrolling top.

}

export function setupDraggableForm(form:HTMLFormElement, originalTop:number, setActive:React.Dispatch<React.SetStateAction<boolean>>) {

  form.style.top = '100%';

  form.onmousedown = (e) => dragStartMouse(e, form, originalTop, setActive);

  form.ontouchstart = (e) => dragStartTouch(e, form, originalTop, setActive);

}