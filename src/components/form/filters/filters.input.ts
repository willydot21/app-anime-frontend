import React from "react";

function setFormToDefault($this:HTMLInputElement, form:HTMLFormElement, prevTop:number) {

  form.style.top = prevTop + 'px';

  form.classList.remove('filters-focus');

  document.onmousemove = null;
  // desactivate mousemove event.

  $this.onblur = null;

}

function setupOnBlur($this:HTMLInputElement, form:HTMLFormElement, prevTop:number) {
  
  $this.onblur = (ev) => {

    var isInput = false;

    if(ev.relatedTarget) {

      isInput = (ev.relatedTarget as Element).nodeName === 'INPUT';

    }

    if(!isInput) { 

      form.style.transitionDuration = '.3s';

      setFormToDefault($this, form, prevTop);
      
    }

  }

}

export function setupOnFocus(
  $this:React.RefObject<HTMLInputElement>, 
  form:React.RefObject<HTMLFormElement>
) {

  if (form.current && $this.current) {

    const prevOffsetTop = form.current.offsetTop;

    form.current.classList.add('filters-focus');

    form.current.style.top = '0%';

    form.current.style.transitionDuration = '.3s';

    setupOnBlur($this.current, form.current, prevOffsetTop);

  }

}