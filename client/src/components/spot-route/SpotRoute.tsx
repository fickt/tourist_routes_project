import React from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import classNames from "classnames";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import CommentsIcon from "modules/mobile-header/components/mobile-header/assets/comments.svg";
import { RatingStar } from "components/rating-star/RatingStar";
import { TSpotRoute } from "modules/card-list/types/spotRoutes";

export const SpotRoute = ({ id, name, difficulty, rating, photos }: TSpotRoute) => {

    return (
        <article className={s.card}>
            <div className={s.card__main}>
                <span className={classNames(s.card__features, s.card__features_difficulty)}>{difficulty}</span>
                <Link to={`/spots/${id}`} className={s.card__link} >
                    <img className={s.card__image} src={photos[0]} alt={name} />
                </Link>
                <span className={classNames(s.card__features, s.card__features_rating)}><RatingStar rating={+rating} id={id} /></span>
            </div>
            <div className={s.card__options}>
                <Link to={"#"} className={s.comments_link}>
                    <span className={s.favorites_btn}>
                        <CommentsIcon />
                    </span>
                    <span className={s.comments_count}>3</span>
                </Link>
                <button className={s.favorites_btn}><FavoritesIcon /></button>
            </div>
            <div className={s.card__title}>
                <h3 className={s.card__name}>{name}</h3>
            </div>
        </article>
    );
};
