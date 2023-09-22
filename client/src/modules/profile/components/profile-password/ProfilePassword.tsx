import classNames from "classnames";
import {FormElem} from "components/form-elem/components/form-elem/FormElem";
import {Link} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {settings} from "modules/profile";
import s from './styles.module.scss';

export const ProfilePassword = () => {

    return (
        <div className={classNames("wrapper", s.settingsPassword)}>
            <FormElem isPasswordChange/>
            <div className="buttons__wrapper">
                <Link className={"buttons__link"} to={RoutePath.settings}>
                    <Button extraClass={classNames("button", "button_green")}>{settings.save}</Button>
                </Link>
                <Link className={"buttons__link"} to={RoutePath.settings}>
                    <Button extraClass={classNames("button", "button_white")}>{settings.cancel}</Button>
                </Link>
            </div>
        </div>
    )
}