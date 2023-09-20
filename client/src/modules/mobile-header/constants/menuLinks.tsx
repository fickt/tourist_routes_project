import {RoutePath} from "pages/routeConfig";
import HomeIcon from "modules/mobile-header/components/mobile-header/assets/home.svg";
import LocationIcon from "modules/mobile-header/components/mobile-header/assets/location.svg";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import ProfileIcon from "modules/mobile-header/components/mobile-header/assets/profile.svg";

export const menuLinks = [
    {path: RoutePath.home, icon: <HomeIcon/>, text: "Главная"},
    {path: RoutePath.location, icon: <LocationIcon/>, text: "Рядом"},
    {path: RoutePath.favorites, icon: <FavoritesIcon/>, text: "Избранное"},
    {path: RoutePath.profile, icon: <ProfileIcon/>, text: "Аккаунт"},
]

export const buttonText = {
    passRoute: "Маршрут пройден",
    buildRoute: "Построить маршрут",
}

export const spotMap = "/spotMap/";