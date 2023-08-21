import s from "./styles.module.scss";
import { AuthForm } from "modules/auth-form/components/auth-form/AuthForm";
import { FormHeader } from "components/form-header/FormHeader";
import { TAuthPageProps } from "pages/types";
import { getAuthPageTextContent } from "pages/auth-page/constants/authPageTextContent";

export const AuthPage = ({ isRegister }: TAuthPageProps) => {

    const { title, text, linkPath, headerLink, textLink } = getAuthPageTextContent(isRegister);

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
};