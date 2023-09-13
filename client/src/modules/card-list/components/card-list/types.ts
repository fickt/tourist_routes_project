import {TLocalRoute} from "utils/localRoutes";
import {TUpdatedRoutes} from "modules/favorites/store/types/favoriteTypes";

export type TCardListProps = {
    routesPass?: boolean,
    favPage?: boolean,
    spots: TLocalRoute[] | TUpdatedRoutes,
    activeFavMark?: boolean,
}