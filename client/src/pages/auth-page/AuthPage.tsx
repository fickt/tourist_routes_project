import {TAuthPageProps} from "pages/types";
import {AuthForm} from "modules/auth-form";

export const AuthPage = ({isRegister}: TAuthPageProps) => {

    return (
        <div className="wrapper">
            <AuthForm isRegister={isRegister}/>
        </div>
    );
};