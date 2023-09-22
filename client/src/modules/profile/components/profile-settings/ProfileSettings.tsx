import React, {useEffect} from "react";
import {RoutePath} from "pages/routeConfig";
import s from "./styles.module.scss";
import {Button} from "ui/button/Button";
import {Link} from "react-router-dom";
import {settings} from "modules/profile/constants/profileValues";
import {FormElem} from "components/form-elem/components/form-elem/FormElem";
import classNames from "classnames";
import {useAppSelector} from "storage/hookTypes";
import {inputTouched} from "modules/profile/store/profileSelector";
import {useDispatch} from "react-redux";
import {setInputTouched} from "modules/profile";

export const ProfileSettings = () => {
    const dispatch = useDispatch();
    const isInputTouched = useAppSelector(inputTouched);

    useEffect(() => {
        dispatch(setInputTouched(false));
    }, [])

    return (
        <div className={s.settings}>
            <span className={s.settings__title}>{settings.profileData}</span>
            <div className={s.settings__fields}>
                <FormElem isInfoChange/>
                <div className={s.settings__fields}>
                    {isInputTouched && (
                        <div className={classNames("buttons__wrapper", s.settings__fields__buttons)}>
                            <Link className={"buttons__link"} to={RoutePath.settings}>
                                <Button extraClass={classNames("button", "button_green")}>{settings.save}</Button>
                            </Link>
                            <Link className={"buttons__link"} to={RoutePath.settings}>
                                <Button extraClass={classNames("button", "button_white")}>{settings.cancel}</Button>
                            </Link>
                        </div>
                    )}
                    <span className={s.settings__title}>{settings.password}</span>
                    <div className="buttons__wrapper">
                        <Link className="buttons__link" to={RoutePath.settings_password}>
                            <Button extraClass={classNames("button", "button_white")}>{settings.changePassword}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}