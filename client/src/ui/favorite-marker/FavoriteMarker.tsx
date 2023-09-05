import React, {useState} from "react";
import s from "./styles.module.scss";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";

export const FavoriteMarker = () => {

    const [isActive, setIsActive] = useState(false);
    const iconStyle = isActive ? s.icon_active : "";

    const toggleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <button className={s.favorite} onClick={toggleClick}>
            <FavoritesIcon className={iconStyle}/>
        </button>
    )
}