import { RoutePath } from "pages/routeConfig";

export const getAuthPageTextContent = (isRegister: boolean) => {
    const title = isRegister ? "Регистрация" : "Добро пожаловать";
    const text = isRegister ? "" : "Чтобы продолжить, пожалуйста, войдите в аккаунт";
    const link = isRegister ? RoutePath.auth_login : RoutePath.auth_register;
    const headerLink = isRegister ? "Уже зарегистрированы?" : "Ещё не зарегистрированы?";
    const textLink = isRegister ? "Войдите в аккаунт." : "Зарегистрируйтесь здесь.";

    return { title, text, link, headerLink, textLink };
};