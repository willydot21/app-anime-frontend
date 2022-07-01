
import './style.css'

const ModalButton = ({ id, name }:{ id:string, name:string }) => (
  <button type="button" className="modal-button" 
    data-bs-toggle="modal"
    data-bs-target={ `#${id}` }
  >
    <p className="modal-button-title">
    { name }
    </p>

    <label className="material-icons">
      chevron_right
    </label>

  </button>
);

export default ModalButton;