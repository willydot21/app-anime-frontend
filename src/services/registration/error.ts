
class PostError { 

  public static removeErrorEvent (
    form: HTMLFormElement,
    inputName: string
  ) {

    const span = form.querySelector(
      `input[name=${inputName}] + span`
    ) as HTMLSpanElement; 
    
    const input = form.querySelector(`input[name=${inputName}]`) as HTMLInputElement;

    if( input && span ) {

      setTimeout(() => {
        input.value = '';
      }, 300);

      input.onfocus = function () {

        if( span.nextSibling ) {
          span.nextSibling.remove();
        }
        // remove error text.
        
        document.onclick = null;

      } // end document onclick event.

    } // end if.

  } // end method

  public static showError(
    form: HTMLFormElement, 
    error: string,
    inputName: string
  ) {

    const span = form.querySelector(
      `input[name=${inputName}] + span`
    ); 

    const textNode = document.createElement('div');
    textNode.className = 'input-error-message';
    textNode.innerHTML = error;

    if (span) {

      span.after(textNode);

      textNode.animate([
        { opacity:'0%'},
        { opacity:'100%'}
      ], {duration:200, iterations:1});
      // a small feedback.

    } else { console.log('Something is wrong.'); }

  } // end method.

  public static highlightErrorInput (
    form: HTMLFormElement, inputName: string
  ) {

    const input = form.querySelector(`input[name=${inputName}]`) as HTMLInputElement;

    const span = form.querySelector(`input[name=${inputName}] + span`) as HTMLSpanElement;

    if ( input && span ) {

      input.animate([ {},
        {transform:"translateX(-5px)", color:"red", borderColor:"red"},
        {transform:"translateX(+5px)"}
      ], {duration: 300});
      // a small feedback

    } else { console.log('something is wrong'); }

  } // end method.

  public static HandlerPostError (
    form: HTMLFormElement, err: { error:string, code:string }
  ) {

    const handlerError = (inputName:string) => {
      this.highlightErrorInput(form, inputName);
      this.showError(form, err.error, inputName);
      this.removeErrorEvent(form, inputName);
    }

    switch(err.code) {
      case 'EINV409': // email is not valid
        handlerError('email');
        break;
  
      case 'PINV409': // password is not valid
        handlerError('password');
        break;
  
      case 'EAE409': // email already exist
        handlerError('email')
        break;
  
      case 'UINF404': // user is not found
        handlerError('email');
        break;
  
      case 'IPW400': // incorrect password
        handlerError('password');
        break;

      case 'SE500': // server error
        break;
  
      default: break; 
    } // end switch.

  } // end method.

} // end class

export default PostError;