import {restorePassword} from "components/restore-password/constants/constants";
import s from "./styles.module.scss";
import classNames from "classnames";
import {FormElem} from "components/form-elem/components/form-elem/FormElem";
import {Button} from "ui/button/Button";
import {authMessages} from "modules/auth-form";
import {useAppSelector} from "storage/hookTypes";
import {isLoader} from "components/loader-error";

export const RestorePassword = () => {
    const loader = useAppSelector(isLoader);
    const navigateBack = () => window.history.back();

    return (
        <div className={classNames("wrapper", s.restorePassword)}>
            <h2 className={s.restorePassword__title}>{restorePassword.title}</h2>
            <p className={s.restorePassword__text}>{restorePassword.text}</p>
            <FormElem restorePassword/>
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button
                        extraClass={classNames("button", "button_white")}
                        action={navigateBack}
                        disabled={loader}
                    >
                        {authMessages.cancel}
                    </Button>
                </div>
            </div>
        </div>
    );
};