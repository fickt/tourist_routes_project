import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import Button from "ui/button/Button";
import { TCardProps } from "./types";
import { RatingStar } from "components/rating-star/RatingStar";

export const Card = ({id, name, description, coordinates, picture, children, rating}: TCardProps) => {

    return (
        <article className={s.card}>
            <div className={s.card__image_wrapper}>
                <img className={s.card__image} src={picture} alt={name}/>
            </div>
            <div className={s.card__text_block}>
                <Link to={`/spots/${id}`} className={s.card__link}>
                    <div className={s.card__desc}>
                        <h3 className={s.card__name}>{name}</h3>
                        <span>{description}</span>
                    </div>
                </Link>
                <Button extraClass={s.button} type="primary"
                        href={`https://yandex.ru/maps/?rtext=~${coordinates[0]},${coordinates[1]}`} target="_blank">
                    Лучший маршрут
                </Button>
            </div>
            <RatingStar rating={rating} id={id}/>
            {children}
        </article>
    );
}
