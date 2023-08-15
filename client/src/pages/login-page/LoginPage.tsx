import s from "./styles.module.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";
import { AppRoutes, RoutePath } from "pages/routeConfig";

const LoginPage = () => {

    return (
        <div className={s.auth}>
            <FormHeader
                title="Добро пожаловать"
                text="Чтобы продолжить, пожалуйста, войдите в аккаунт"
                link={RoutePath[AppRoutes.REGISTRATION]}
                headerLink="Ещё не зарегистрированы?"
                textLink="Зарегистрируйтесь здесь."
            />
            <AuthForm type={RoutePath[AppRoutes.LOGIN]} />
        </div>
    );
}

export default LoginPage;