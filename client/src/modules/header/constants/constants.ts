import {RoutePath} from "pages/routeConfig";

export const headers = {
    ourRoutes: "Наши маршруты",
    profile: "Личный кабинет",
    favorites: "Избранное",
    mySpots: "Мои места",
    filters: "Фильтр",
    nearest: "Ближайшие места",
    settingsInfo: "Управление аккаунтом",
    route: "Маршрут",
    aboutSpot: "О месте",
    logo: "LOGO",
    changePassword: "Изменение пароля",
    spotId: "/spots/",
    spotMap: "/spotMap/",
}

export const pathToHeader = {
    [RoutePath.home]: headers.ourRoutes,
    [RoutePath.profile]: headers.profile,
    [RoutePath.favorites]: headers.favorites,
    [RoutePath.mySpots]: headers.mySpots,
    [RoutePath.filters]: headers.filters,
    [RoutePath.location]: headers.nearest,
    [RoutePath.settings_password]: headers.changePassword,
};