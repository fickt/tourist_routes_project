import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ProfileSectionProps } from "modules/profile/components/profile-section/types";
import MySpotsImage from "./assets/mySpots.png";
import FavoritesImage from "./assets/favorites.png";
import LocationIcon from "./assets/locationIcon.svg";
import FavIcon from "./assets/favIcon.svg";

export const ProfileSection = ({ path, title }: ProfileSectionProps) => {

    const backgroundImage = title !== "Избранное" ? `url(${MySpotsImage})` : `url(${FavoritesImage})`;

    return (
        <Link to={path}>
            <div className={s.fav} style={{ backgroundImage: backgroundImage }}>
                {title !== "Избранное"
                    ? <LocationIcon className={s.fav__icon} alt="icon" />
                    : <FavIcon className={s.fav__icon} alt="icon" />}
                <span className={s.fav__text}>{title}</span>
            </div>
        </Link>
    )
}