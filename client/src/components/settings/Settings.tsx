import { ProfileHeader } from "modules/profile/components";
import { RoutePath } from "pages/routeConfig";
import s from "./styles.module.scss";
import { Button } from "ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form";

export const Settings = () => {

    const navigate = useNavigate();
    const user = useAppSelector(authUser);

    const changePasswordRedirect = () => {
        navigate(RoutePath.settings_password);
    }

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
                    <Button action={changePasswordRedirect}>Изменить пароль</Button>
                </div>
            </div>
        </div>
    )
}