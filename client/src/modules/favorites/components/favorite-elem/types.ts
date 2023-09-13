import {TLocalRoute} from "utils/localRoutes";

export type TFavoriteElemProps = {
    activeFavMark?: boolean,
    spot?: TLocalRoute,
    setMarkerActive?: () => void,
}