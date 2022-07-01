
import './style.css';
import { useRef, useState } from 'react';
import SelectCategory from './select-category/select-category';
import SelectType from './select-type/select-type';
import ModalButton from '../../input/button/modal-button/modal-button';
import PlaceHolderInput from '../../input/text/placeholder-input/placeholder-input';
import AppDropdown from '../../dropdown/dropdown';
import TopButtons from './top-buttons/top-buttons';
import { formFiltersAction } from './filters.utils';
import { FiltersFormProps } from './filters-types';

const FiltersForm = ({ externalState }:FiltersFormProps) => {

  const [ _filtersForm, setFiltersForm ] = externalState;
  const [ status, setStatus ] = useState('Finalizado');
  const [ sort, setSort ] = useState('Más recientes');

  const checkboxCategory = useRef<HTMLDivElement>(null);
  const checkboxTypes = useRef<HTMLDivElement>(null);
  const inputStartYear = useRef<HTMLInputElement>(null);
  const inputEndYear = useRef<HTMLInputElement>(null);

  return (
    <form className="filters-form">

      <TopButtons click={
          (type:string) => formFiltersAction({ 
            states:{sort, status},
            setStates:{setStatus, setSort, setFiltersForm}, 
            refs:{checkboxCategory, checkboxTypes, inputEndYear, inputStartYear} 
          }, type)
        }
      />

      <AppDropdown options={['Más recientes', 'Menos recientes']}
        name="Ordenar"
        externalState={[sort, setSort]}
      />

      <AppDropdown options={['Finalizado', 'En emisión', 'Proximamente']}
        name="Estado"
        externalState={[status, setStatus]}
      />

      <PlaceHolderInput placeholder="Desde el año" type="number" _ref={inputStartYear} />

      <PlaceHolderInput placeholder="Hasta el año" type="number" _ref={inputEndYear} />

      <SelectCategory checkboxContainer={checkboxCategory} />

      <SelectType checkboxContainer={checkboxTypes} />

      <ModalButton id="select-category" name="Categorias" />

      <ModalButton id="select-type" name="Tipos" />

    </form>
  );

}

export default FiltersForm;