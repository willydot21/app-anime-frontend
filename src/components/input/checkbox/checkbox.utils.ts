
export const checkboxClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

  var auxCheckbox: null | HTMLInputElement = null;

  const target = e.target as HTMLLabelElement | HTMLInputElement | HTMLDivElement;

  switch (target.nodeName) {

    case 'DIV':
      auxCheckbox = target.firstChild as HTMLInputElement;
      break;

    case 'LABEL':
      const parent = target.parentNode;

      auxCheckbox = (
        parent
          ? parent.firstChild as HTMLInputElement
          : null
      );

      break;

  }

  if (auxCheckbox) {

    auxCheckbox.checked = !auxCheckbox.checked;

  }

}