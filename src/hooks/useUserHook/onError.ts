import { removePreviousSpan } from "./utils";

class PostError {

  public static removeErrorEvent(
    form: HTMLFormElement,
    inputName: string
  ) {

    const span = form.querySelector(
      `.input-error-message`
    ) as HTMLSpanElement;

    const input = form.querySelector(`input[name=${inputName}]`) as HTMLInputElement;

    if (input && span) {

      input.value = '';

      setTimeout(() => {

        span.remove();
        // remove error text.

      }, 2000);

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

      removePreviousSpan(form);

      span.after(textNode);

      textNode.animate([
        { opacity: '0%' },
        { opacity: '100%' }
      ], { duration: 200, iterations: 1 });
      // a small feedback.

    } else { console.log('Something is wrong.'); }

  } // end method.

  public static handleError(
    form: HTMLFormElement,
    err: { error: string, code: string },
    inputName: string
  ) {
    this.showError(form, err.error, inputName);
    this.removeErrorEvent(form, inputName);
  }

  public static HandlerPostError(
    form: HTMLFormElement, err: { error: string, code: string }
  ) {

    switch (err.code) {
      case 'EINV409': // email is not valid
        this.handleError(form, err, 'email');
        break;

      case 'PINV409': // password is not valid
        this.handleError(form, err, 'password');
        break;

      case 'EAE409': // email already exist
        this.handleError(form, err, 'email')
        break;

      case 'UINF404': // user is not found
        this.handleError(form, err, 'email');
        break;

      case 'IPW400': // incorrect password
        this.handleError(form, err, 'password');
        break;

      case 'SE500': // server error
        break;

      default: break;
    } // end switch.

  } // end method.

} // end class

export default PostError;