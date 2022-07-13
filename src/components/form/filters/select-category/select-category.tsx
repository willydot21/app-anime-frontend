
import { animeCategories } from "../../../../services/api/api.utils";
import SelectModal from "../../select-modal/select-modal";
import CheckboxContainer from "../../../container/checkbox-container/checkbox-container";
import React from "react";

const SelectCategory = ({ checkboxContainer }:{
  checkboxContainer:React.RefObject<HTMLDivElement>
}) => (
  <SelectModal id="select-category" title="Categorias">
    <CheckboxContainer elements={animeCategories} _ref={checkboxContainer} checkboxName="genres" />
  </SelectModal>
);

export default SelectCategory;