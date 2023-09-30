import {RootState} from "storage/reduxTypes";

export const spotsSelector = (state: RootState) => state.spots.data;
export const spotMapSelector = (state: RootState) => state.spots.map_data;