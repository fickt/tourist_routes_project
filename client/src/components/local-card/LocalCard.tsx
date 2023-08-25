import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import { TCardProps } from "./types";
import classNames from "classnames";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import { Rate } from "antd";

export const LocalCard = ({ id, name, photos, rating }: TCardProps) => {


    return (
        <article className={s.card} style={{ backgroundImage: `url(${photos[0]})` }}>
            <div className={s.card__options}>
                <span className={classNames(s.card__option, s.card__options_difficulty)}>Новичок</span>
                <button className={classNames(s.card__option, s.card__options_favorite)}><FavoritesIcon /></button>
            </div>
            <div className={s.card__main}>
                <span className={s.card__rating}>
                    <Rate defaultValue={5} disabled />
                </span>
                <Link to={`/spots/${id}`} className={s.link} >
                    <div className={s.card__title}>
                        <h2 className={s.card__name}>{name}</h2>
                    </div>
                </Link>
            </div>

        </article>

    );
};