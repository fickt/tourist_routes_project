import { RESET_FILTERS } from "modules/filters/store/filtersActionTypeNames";

export type TFiltersActions = TFiltersTagAction | TFiltersResetAction;

export type TFiltersTagAction = {
    type: string,
    payload: string  
}

export type TFiltersResetAction = {
    type: typeof RESET_FILTERS
}
