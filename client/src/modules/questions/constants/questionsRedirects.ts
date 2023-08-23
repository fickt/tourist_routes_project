import { RoutePath } from "pages/routeConfig";
import { NavigateFunction } from "react-router-dom";

export const redirectToProfile = (navigate: NavigateFunction) => {
    navigate(RoutePath.profile);
}