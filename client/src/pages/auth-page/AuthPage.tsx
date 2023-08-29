import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { TAuthPageProps } from "pages/types";

export const AuthPage = ({ isRegister }: TAuthPageProps) => {

    return (
        <div className="wrapper">
            <AuthForm isRegister={isRegister} />
        </div>
    );
};