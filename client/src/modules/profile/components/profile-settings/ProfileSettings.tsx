import { RoutePath } from "pages/routeConfig";
import s from "./styles.module.scss";
import { Button } from "ui/button/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form";
import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";

export const ProfileSettings = () => {

    const user = useAppSelector(authUser);

    return (
        <div className={s.settings}>
            <ProfileHeader text="Никнейм" path={RoutePath.settings_info} />
            <h3 className={s.settings__title}>Учетные данные</h3>
            <div className={s.settings__fields}>
                <label className={s.field}>E-mail
                    <input className={s.field__input} placeholder={user.email} disabled={true} />
                </label>
                <div className={s.field}>
                    <span className={s.title}>Пароль</span>
                    <Link to={RoutePath.settings_password}>
                        <Button>Изменить пароль</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}