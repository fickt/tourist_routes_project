import { DELETE_FILTER_CATEGORY, DELETE_FILTER_DIFFICULTY, RESET_FILTERS, SET_FILTER_CATEGORY, SET_FILTER_DIFFICULTY } from "./filtersActionTypeNames"
import { TFiltersResetAction, TFiltersTagAction } from "./types/filtersActionTypes"

export const setFilterCategoryAction = (tag: string): TFiltersTagAction => {
    return {
        type: SET_FILTER_CATEGORY,
        payload: tag,
    }
}

export const setFilterDifficultyAction = (tag: string): TFiltersTagAction => {
    return {
        type: SET_FILTER_DIFFICULTY,
        payload: tag        
    }
}

export const deleteFilterCategoryAction = (tag: string): TFiltersTagAction => {
    return {
        type: DELETE_FILTER_CATEGORY,
        payload: tag,
    }
}

export const deleteFilterDifficultyAction = (tag: string): TFiltersTagAction => {
    return {
        type: DELETE_FILTER_DIFFICULTY,
        payload: tag        
    }
}

export const resetFiltersAction = (): TFiltersResetAction => {
    return {
        type: RESET_FILTERS,
    }
}

