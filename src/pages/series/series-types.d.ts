
import { Filters, FiltersResult } from "../../services/api/api-types"

export type FilterItemState = [FiltersResult, React.Dispatch<React.SetStateAction<FiltersResult>>];

export type FilterFormState = [Filters, React.Dispatch<React.SetStateAction<Filters>>];

export interface LoadMoreParams {
  filterItemsState: FilterItemState;
  filtersForm: Filters;
}