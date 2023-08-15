import s from "./styles.module.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";
import { AppRoutes, RoutePath } from "pages/routeConfig";
import { TAuthPageProps } from "pages/types";

const AuthPage = ({ isRegister }: TAuthPageProps) => {

    const title = isRegister ? "Регистрация" : "Добро пожаловать";
    const text = isRegister
        ? "Уже зарегистрированы? Войдите в аккаунт."
        : "Чтобы продолжить, пожалуйста, войдите в аккаунт";
    const linkPath = isRegister ? RoutePath[AppRoutes.AUTH_LOGIN] : RoutePath[AppRoutes.AUTH_REGISTER];
    const headerLink = isRegister ? "Уже зарегистрированы?" : "Ещё не зарегистрированы?";
    const textLink = isRegister ? "Войдите в аккаунт." : "Зарегистрируйтесь здесь.";

    return (
        <div className={s.auth}>
            <FormHeader
                title={title}
                text={text}
                link={linkPath}
                headerLink={headerLink}
                textLink={textLink}
            />
            <AuthForm isRegister={isRegister} />
        </div>
    );
}

export default AuthPage;