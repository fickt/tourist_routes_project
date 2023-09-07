import {RootState} from "storage/reduxTypes";

export const userFavoritesSpots = (state: RootState) => state.favorites.favSpots;
export const isFavMarkActive = (state: RootState) => state.fav_mark.isFavMarkActive;
export const isSpotsUpdated = (state: RootState) => state.updated_spots.updatedSpots;