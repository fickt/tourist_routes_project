import s from "./styles.module.scss";
import { ReviewBlock } from "modules/review-block";
import { TSpotItemProps } from "./types";
import { TagList } from "components/filters-tag/FiltersTag";
import classNames from "classnames";
import { Slider } from "modules/spot-item/components/slider/Slider";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSpotItemId } from "modules/spot-item/store/spotItemActions";

export const SpotItem = ({ spotItem }: TSpotItemProps) => {

    const { name, description, photos, id, categories, difficulty, comments } = spotItem;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setSpotItemId(id.toString()))
    }, [id])

    return (
        <div className={s.wrapper}>
            <section id="image" className={classNames(s.section, s.slider)}>
                <Slider photos={photos} name={name} />
                <div className={s.tags}>
                    <TagList tagList={[difficulty]} />
                    <TagList tagList={categories} />
                </div>
            </section>
            <section id="main" className={classNames(s.section, s.description)}>
                <h2 className={s.description__title}>{name}</h2>
                <div className={s.section__text}>{description}</div>
            </section>
            <section id="take-with" className={classNames(s.section, s.takeWith)}>
                <h2 className={s.takeWith__title}>Возьмите в дорогу</h2>
                <div className={s.section__text}>Список того, что может потребоваться в дорогу. Все для комфортного путешествия.</div>
            </section>
            <section id="reviews" className={classNames(s.section, s.reviews)}>
                <h2 className={s.reviews__title}>Отзывы {comments.length !== 0 && comments.length}</h2>
                <ReviewBlock id={id} />
            </section>
        </div>
    )
}