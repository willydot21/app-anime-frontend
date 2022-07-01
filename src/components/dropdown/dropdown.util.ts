import React from "react";

var prevDropDownOptions: HTMLUListElement;
// i need to define global variable because, when document.onclick is
// changed, i need one track that tell me if there is any other previous instance,
// that has not yet been cancelled.
// this would not be a problem, if there is only one instance. :v

const onClickAny = (
  dropdownOptions: HTMLUListElement,
  dropdown: HTMLDivElement
) => {

  if (document.onclick  && prevDropDownOptions) {

    prevDropDownOptions.classList.remove('active');

    document.onclick = null;

  } 
  // if prev element is open close it.
  // and remove onclick event from document

  document.onclick = function (e) {

    prevDropDownOptions = dropdownOptions;

    const target = e.target as Element;

    if (!dropdown.contains(target) || dropdownOptions.contains(target)) {

      dropdownOptions.classList.remove('active');

      document.onclick = null;

    }
    // if element is not dropdown or option from dropdown, close it.

  }

}

export const dropdownClick = (
  dropdownOptions: React.RefObject<HTMLUListElement>,
  dropdown: React.RefObject<HTMLDivElement>
) => {

  if (dropdownOptions.current && dropdown.current) {

    const $this = dropdownOptions.current;

    if ( !$this.classList.contains('active') ) {

      onClickAny($this, dropdown.current);

    }

    $this.classList.toggle('active');

  }

}