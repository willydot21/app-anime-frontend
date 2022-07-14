
export const removeFuckModals = () => {

  document.querySelectorAll('.modal').forEach( modal => {

    modal.remove();

  });

  document.querySelectorAll('.modal-backdrop').forEach( backdrop => {

    backdrop.remove();

  });
  
}

export const fixBodyOverflow = () => {

  const bStyle = document.body.style;

  if ((bStyle.overflow === 'auto') || !bStyle.overflow.length ){

    bStyle.overflow = 'hidden';

  } else { bStyle.overflow = 'auto'; }

}