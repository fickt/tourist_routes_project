import { RoutePath } from "pages/routeConfig";
import HomeIcon from "modules/mobile-header/components/mobile-header/assets/home.svg";
import SearchIcon from "modules/mobile-header/components/mobile-header/assets/search.svg";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import ProfileIcon from "modules/mobile-header/components/mobile-header/assets/profile.svg";

export const menuLinks = [
    {path: RoutePath.home, icon: <HomeIcon />},
    {path: RoutePath.spots, icon: <SearchIcon />},
    {path: RoutePath.favorites, icon: <FavoritesIcon />},
    {path: RoutePath.auth_login, icon: <ProfileIcon />},
]