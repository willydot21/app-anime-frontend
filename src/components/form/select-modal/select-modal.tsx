
import './btn-close-style.css';
import { bgb, bdg } from "./style";
// bgb: background color dark
// bdg: border color dark

const SelectModal = ({ children, id, title }:{ 
  children:React.ReactNode, 
  id:string,
  title:string
}) => (
  <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content" style={bgb}>
        <div className="modal-header" style={bdg}>
          <h5 className="modal-title"> {title} </h5>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer" style={bdg}>
          <button type="button" className="btn-close-modal" data-bs-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>
);

export default SelectModal;