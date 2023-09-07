import {TLocalRoute} from "utils/localRoutes";
import {TUpdatedRoutes} from "modules/favorites/store/types/favoriteTypes";

export type TCardListProps = {
    spots: TLocalRoute[] | TUpdatedRoutes,
    activeFavMark?: boolean,
}