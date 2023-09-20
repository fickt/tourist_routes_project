import {RoutePath} from "pages/routeConfig";
import HomeIcon from "modules/mobile-header/components/mobile-header/assets/home.svg";
import LocationIcon from "modules/mobile-header/components/mobile-header/assets/location.svg";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import ProfileIcon from "modules/mobile-header/components/mobile-header/assets/profile.svg";

export const menuLinks = [
    {path: RoutePath.home, icon: <HomeIcon/>},
    {path: RoutePath.location, icon: <LocationIcon/>},
    {path: RoutePath.favorites, icon: <FavoritesIcon/>},
    {path: RoutePath.profile, icon: <ProfileIcon/>},
]

export const buttonText = {
    passRoute: "Маршрут пройден",
    buildRoute: "Построить маршрут",
}

export const spotMap = "/spotMap/";