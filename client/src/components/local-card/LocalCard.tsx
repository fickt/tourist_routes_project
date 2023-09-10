import {Link} from "react-router-dom";
import s from "./styles.module.scss"
import {TCardProps} from "./types";
import {Rate} from "antd";
import {FavoriteElem} from "modules/favorites/components/favorite-elem/FavoriteElem";

export const LocalCard = ({activeFavMark, spot}: TCardProps) => {

    return (
        <div className={s.wrapper}>
            <div className={s.favorite}>
                <FavoriteElem activeFavMark={activeFavMark} spot={spot}/>
            </div>
            <Link to={`/spots/${spot.id}`} className={s.card} style={{backgroundImage: `url(${spot.photos[0]})`}}>
                <span className={s.card__difficulty}>{spot.difficulty}</span>
                <div className={s.card__main}>
                    <span className={s.card__main__rating}>
                        <Rate defaultValue={spot.rating} disabled/>
                    </span>
                    <h2 className={s.card__main__name}>{spot.name}</h2>
                </div>
            </Link>
        </div>
    );
};