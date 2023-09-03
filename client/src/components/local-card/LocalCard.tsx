import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import { TCardProps } from "./types";
import { Rate } from "antd";
import { FavoriteMarker } from "ui/favorite-marker/FavoriteMarker";
import picture from "modules/main-content/assets/route.jpg";

export const LocalCard = ({ id, name, photos, difficulty }: TCardProps) => {
    photos[0] = picture
    return (
        <div className={s.wrapper}>
            <div className={s.favorite}>
                <FavoriteMarker />
            </div>
            <Link to={`/spots/${id}`} className={s.card} style={{ backgroundImage: `url(${photos[0]})` }}>
                <span className={s.card__difficulty}>{difficulty}</span>
                <div className={s.card__main}>
                    <span className={s.card__main__rating}>
                        <Rate defaultValue={5} disabled />
                    </span>
                    <h2 className={s.card__main__name}>{name}</h2>
                </div>
            </Link>
        </div>
    );
};