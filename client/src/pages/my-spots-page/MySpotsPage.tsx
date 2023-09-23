import {FavoriteMySpots} from "components/favorite-mySpots/FavoriteMySpots";
import {RoutePath} from "pages/routeConfig";

export const MySpotsPage = () => {
    const mySpots = `${RoutePath.mySpots}`;

    return (
        <FavoriteMySpots pageType={mySpots}/>
    );
}