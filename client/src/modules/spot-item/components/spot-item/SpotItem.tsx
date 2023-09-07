import s from "./styles.module.scss";
import {ReviewBlock} from "modules/review-block";
import {TagList} from "components/filters-tag/FiltersTag";
import classNames from "classnames";
import {Slider} from "modules/spot-item/components/slider/Slider";
import {RatingLabel} from "modules/spot-item/components/rating-label/RatingLabel";
import {Button} from "ui/button/Button";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {setSpotItemId} from "modules/spot-item/store/spotItemActions";
import {useDispatch} from "react-redux";
import {TSpotItemProps} from "./types";

export const SpotItem = ({spotItem}: TSpotItemProps) => {

    const dispatch = useDispatch();
    const {name, rating, description, id, photos, categories, difficulty, comments} = spotItem;

    useEffect(() => {
        dispatch(setSpotItemId(id.toString()));
    }, [id])

    return (
        <div className={s.wrapper}>
            <section id="image" className={classNames(s.section, s.slider)}>
                <Slider photos={photos} name={name}/>
                <div className={s.tags}>
                    <TagList tagList={[difficulty]}/>
                    <TagList tagList={categories}/>
                </div>
            </section>
            <section id="main" className={classNames(s.section, s.description)}>
                <h2 className={s.description__title}>{name}</h2>
                <div className={s.section__text}>{description}</div>
            </section>
            <section id="reviews" className={classNames(s.section, s.reviews)}>
                <div className={s.reviews__info}>
                    <h2 className={s.reviews__info__title}>Отзывы {comments.length !== 0 && comments.length}</h2>
                    <RatingLabel rating={rating}/>
                </div>
                <div className="buttons__wrapper">
                    <Link className="buttons__link" to={`/review/${id}`}>
                        <Button extraClass={classNames("button", "button_green")}>Оставить отзыв</Button>
                    </Link>
                </div>
                <ReviewBlock comments={comments}/>
            </section>
        </div>
    )
}