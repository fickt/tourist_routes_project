import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form/store/authSelectors";
import { Button } from "ui/button/Button";
import { RoutePath } from "pages/routeConfig";

export const SettingsPage = () => {

    const user = useAppSelector(authUser);

    return (
        <div className={s.settings}>
            <ProfileHeader text="Никнейм" path={RoutePath.settings_info}/>
            <h3 className={s.settings__title}>Учетные данные</h3>
            <div className={s.settings__fields}>
                <label className={s.field}>E-mail
                    <input className={s.field__input} placeholder={user.email} disabled={true} />
                </label>
                <div className={s.field}>
                    <span className={s.settings__title}>Пароль</span>
                    <Button>Изменить пароль</Button>
                </div>
            </div>
        </div>
    )
}