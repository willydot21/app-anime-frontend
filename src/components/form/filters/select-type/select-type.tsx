
import { animeTypes } from "../../../../services/api/tioanime/api.utils";
import CheckboxContainer from "../../../container/checkbox-container/checkbox-container";
import SelectModal from "../../select-modal/select-modal";

const SelectType = ({ checkboxContainer }:{ 
  checkboxContainer:React.RefObject<HTMLDivElement>
}) => (
  <SelectModal id="select-type" title="Tipos">
    <CheckboxContainer elements={animeTypes} _ref={checkboxContainer} checkboxName="types" />
  </SelectModal>
);

export default SelectType;