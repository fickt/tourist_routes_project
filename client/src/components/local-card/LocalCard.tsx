import {Link} from "react-router-dom";
import s from "./styles.module.scss"
import {TCardProps} from "./types";
import {Rate} from "antd";
import {FavoriteElem} from "modules/favorites/components/favorite-elem/FavoriteElem";

export const LocalCard = ({activeFavMark, id, rating, name, photos, difficulty}: TCardProps) => {


    return (
        <div className={s.wrapper}>
            <div className={s.favorite}>
                <FavoriteElem
                    activeFavMark={activeFavMark}
                    id={id}
                />
            </div>
            <Link to={`/spots/${id}`} className={s.card} style={{backgroundImage: `url(${photos[0]})`}}>
                <span className={s.card__difficulty}>{difficulty}</span>
                <div className={s.card__main}>
                    <span className={s.card__main__rating}>
                        <Rate defaultValue={rating} disabled/>
                    </span>
                    <h2 className={s.card__main__name}>{name}</h2>
                </div>
            </Link>
        </div>
    );
};