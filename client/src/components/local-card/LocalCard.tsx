import {Link} from "react-router-dom";
import s from "./styles.module.scss"
import {TCardProps} from "./types";
import {Rate} from "antd";
import {FavoriteElem} from "modules/favorites/components/favorite-elem/FavoriteElem";
import {Button} from "ui/button/Button";

export const LocalCard = ({activeFavMark, spot}: TCardProps) => {

    function getDeclension(number: number, one: string, two: string, five: string) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
            return five;
        }
        n %= 10;
        if (n === 1) {
            return one;
        }
        if (n >= 2 && n <= 4) {
            return two;
        }
        return five;
    }

    const difficultyClass: Record<string, string> = {
        "новичок": s.card__difficulty__eazy,
        "знающий": s.card__difficulty__middle,
        "опытный": s.card__difficulty__hard,
    };

    return (
        <div className={s.wrapper}>
            <div className={s.favorite}>
                <FavoriteElem activeFavMark={activeFavMark} spot={spot}/>
            </div>
            <Link to={`/spots/${spot.id}`} className={s.card}>
                <img className={s.card__img} 
                    src={spot.photos[0]}
                    alt="Spot"/>
                <div className={s.card__main}>
                    <div className={s.card__main__header}>
                        <span className={s.card__main__rating}>
                            <Rate defaultValue={spot.rating} disabled/>
                        </span>
                        <div className={s.card__main__comments}>
                            <span className={s.card__main__count}>{spot.comments.length}</span>
                            {getDeclension(
                                spot.comments.length,
                                'отзыв', 'отзыва', 'отзывов'
                            )}
                        </div>
                    </div>
                    <h2 className={s.card__main__name}>{spot.name}</h2>
                    <div className={s.card__tags}>
                        <span className={difficultyClass[spot.difficulty]}>{spot.difficulty}</span>
                        {spot.categories.map(tag => (
                            <span key={tag} className={s.card__tag}>{tag}</span>
                        ))}
                    </div>
                    <Button extraClass={s.card__button}>Подробнее</Button>
                </div>
            </Link>
        </div>
    );
};