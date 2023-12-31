import s from "./styles.module.scss";
import ArrowRightIcon from "./assets/arrow-right.svg";
import {useAppSelector} from "storage/hookTypes";
import {TProfileHeaderProps} from "./types";
import {Link} from "react-router-dom";
import {authUser} from "modules/auth-form";
import {settings} from "modules/profile/constants/profileValues";

export const ProfileHeader = ({path}: TProfileHeaderProps) => {
    const user = useAppSelector(authUser);

    return (
        <div className={s.profileHeader}>
            <div className={s.profileInfo}>
                <div className={s.profileInfo__wrapper}>
                    <span className={s.profileInfo__text}>{user.nickname[0]}</span>
                </div>
                <div className={s.profileInfo__settings}>
                    <h2 className={s.profileInfo__settings__title}>{user.nickname}</h2>
                    <p>{settings.profileControl}</p>
                </div>
            </div>
            <Link to={path}>
                <ArrowRightIcon className={s.profileInfo__iconRight}/>
            </Link>
        </div>
    )
}