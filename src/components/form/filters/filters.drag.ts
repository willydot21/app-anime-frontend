
var prevCursorY=0;

function setElementCursor(clientY:number, form:HTMLFormElement) {
  form.style.top = (form.offsetTop - clientY) + 'px';
}

function dragMouseOut(ev:MouseEvent, form:HTMLFormElement, originalTop:number) {

  if (!form.contains(ev.target as Element)) {

    dragStop(form, originalTop);

  }

}

function dragStartTouch(e:TouchEvent, form:HTMLFormElement, originalTop:number) {

  e = e || window.event;

  prevCursorY = e.touches[0].clientY;

  form.style.transitionDuration = 'unset';

  document.ontouchmove = (ev) => dragElement(ev.touches[0].clientY, form);
  form.ontouchend = () => dragStop(form, originalTop);

}

function dragStartMouse(e:MouseEvent, form:HTMLFormElement, originalTop:number) {

  e = e || window.event;

  prevCursorY = e.clientY;

  form.style.transitionDuration = 'unset';

  document.onmousemove = (ev) => dragElement(ev.clientY, form);
  form.onmouseup = () => dragStop(form, originalTop);
  document.onmouseleave = () => dragStop(form, originalTop);
  document.onmouseout = (ev) => dragMouseOut(ev, form, originalTop)

}

function dragElement(evClientY:number, form:HTMLFormElement) {

  if (!form.classList.contains('filters-focus')) {

    const clientY = prevCursorY - evClientY;

    prevCursorY = evClientY;

    setElementCursor(clientY, form);
  
  }

}

function dragStop(form:HTMLFormElement, originalTop:number) {

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
  } else if (
    !form.classList.contains('filters-focus')) {
    form.style.top = originalTop+'px';
  }
  // check if is scrolling top.

}

export function setupDraggableForm(form:HTMLFormElement, originalTop:number) {

  form.style.top = '100%';

  form.onmousedown = (e) => dragStartMouse(e, form, originalTop);

  form.ontouchstart = (e) => dragStartTouch(e, form, originalTop);

}