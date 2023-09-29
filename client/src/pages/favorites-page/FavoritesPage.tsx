import {FavoriteMySpots} from "components/favorite-mySpots/FavoriteMySpots";
import {RoutePath} from "pages/routeConfig";

export const FavoritesPage = () => {
    const favorites = `${RoutePath.favorites}`;

    return (
        <FavoriteMySpots pageType={favorites}/>
    );
}