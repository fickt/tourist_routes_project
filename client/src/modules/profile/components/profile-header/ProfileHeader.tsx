import s from "./styles.module.scss";
import ArrowRightIcon from "./assets/arrow-right.svg";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form/store/authSelectors";
import { TProfileHeaderProps } from "./types";
import { Link } from "react-router-dom";

export const ProfileHeader = ({ text, path }: TProfileHeaderProps) => {

    const user = useAppSelector(authUser);

    return (
        <div className={s.profileHeader}>
            <div className={s.profileInfo}>
                <div className={s.profileInfo__wrapper}>
                    {user && <span className={s.profileInfo__text}>{user.nickname[0]}</span>}
                </div>
                <div className={s.profileInfo__settings}>
                    {user && <h2 className={s.profileInfo__settings__title}>{user.nickname}</h2>}
                    <p>{text}</p>
                </div>
            </div>
            <Link to={path}>
                <ArrowRightIcon className={s.profileInfo__iconRight} />
            </Link>
        </div>
    )
}