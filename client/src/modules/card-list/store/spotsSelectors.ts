import {RootState} from "storage/reduxTypes";

export const spotsSelector = (state: RootState) => state.spots.data;
export const spotMapSelector = (state: RootState) => state.spots.map_data;
export const chosenSpotSelector = (state: RootState) => state.spots.chosen_spot;
export const chosenMapSpotSelector = (state: RootState) => state.spots.chosen_map_spot;