import { RoutePath } from "pages/routeConfig";
import HomeIcon from "modules/mobile-header/components/mobile-header/assets/home.svg";
import SearchIcon from "modules/mobile-header/components/mobile-header/assets/search.svg";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import ProfileIcon from "modules/mobile-header/components/mobile-header/assets/profile.svg";
import Cookies from "js-cookie";

const checkUserAuth = () => {
    if (Cookies.get("token")) {
        return RoutePath.profile;
    } else {
        return RoutePath.auth_login;
    }
}

export const menuLinks = [
    {path: RoutePath.home, icon: <HomeIcon />},
    {path: RoutePath.spots, icon: <SearchIcon />},
    {path: RoutePath.favorites, icon: <FavoritesIcon />},
    {path: checkUserAuth(), icon: <ProfileIcon />},
]