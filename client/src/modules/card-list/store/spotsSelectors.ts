import { RootState } from "storage/reduxTypes";

export const spotsSelector = (state:RootState) => state.spots.data
export const spotRoutesSelector = (state:RootState) => state.spots.dataDb