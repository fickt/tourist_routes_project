import { RootState } from "storage/reduxTypes";

export const filterCategories = (state: RootState) => state.filters.categories;
export const filterDifficulties = (state: RootState) => state.filters.difficulties;