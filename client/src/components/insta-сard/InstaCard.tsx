import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import { TCardProps } from "./types";
import classNames from "classnames";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";
import CommentsIcon from "modules/mobile-header/components/mobile-header/assets/comments.svg";
import { RatingStar } from "components/rating-star/RatingStar";

<<<<<<<< HEAD:client/src/components/localCard/LocalCard.tsx


const LocalCard = ({ id, name, picture, rating }: TCardProps) => {
========
export const InstaCard = ({ id, name, picture, rating }: TCardProps) => {
>>>>>>>> 2728cce6f3531b503c1f24f5ca76276ad6240a10:client/src/components/insta-сard/InstaCard.tsx

    return (
        <article className={s.card}>
            <div className={s.card__main}>
                <span className={classNames(s.card__features, s.card__features_difficulty)}>Сложность</span>
                <Link to={`/spots/${id}`} className={s.card__link} >
                    <img className={s.card__image} src={picture} alt={name} />
                </Link>
                <span className={classNames(s.card__features, s.card__features_rating)}>
                    <RatingStar rating={rating} id={id} />
                </span>
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
}
<<<<<<<< HEAD:client/src/components/localCard/LocalCard.tsx

export default LocalCard;
========
>>>>>>>> 2728cce6f3531b503c1f24f5ca76276ad6240a10:client/src/components/insta-сard/InstaCard.tsx
