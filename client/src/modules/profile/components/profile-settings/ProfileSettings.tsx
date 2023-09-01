import { RoutePath } from "pages/routeConfig";
import s from "./styles.module.scss";
import { Button } from "ui/button/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form";
import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";
import classNames from "classnames";

export const ProfileSettings = () => {

    const user = useAppSelector(authUser);

    return (
        <div className={s.settings}>
            <ProfileHeader path={RoutePath.settings_info} />
            <span className={s.settings__title}>Учетные данные</span>
            <div className={s.settings__fields}>
                <div className={s.field}>
                    <label className={s.field__email}>E-mail
                        <input className={s.field__email__input} placeholder={user.email} disabled={true} />
                    </label>
                </div>
                <div className={s.field}>
                    <span className={s.settings__title}>Пароль</span>
                    <div className="buttons__wrapper">
                        <Link className="buttons__link" to={RoutePath.settings_password}>
                            <Button extraClass={classNames("button", "button_white")}>Изменить пароль</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}