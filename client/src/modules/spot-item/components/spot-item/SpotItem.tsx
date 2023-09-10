import React, {useEffect, useState} from "react";
import s from "./styles.module.scss";
import {TagList} from "components/filters-tag/FiltersTag";
import classNames from "classnames";
import {Slider} from "modules/spot-item/components/slider/Slider";
import {RatingLabel} from "modules/spot-item/components/rating-label/RatingLabel";
import {Button} from "ui/button/Button";
import {setSpotItemId} from "modules/spot-item/store/spotItemActions";
import {useDispatch} from "react-redux";
import {TSpotItemProps} from "./types";
import {Popup} from "ui/popup/Popup";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {ReviewBlock} from "modules/review-block";

export const SpotItem = ({spotItem}: TSpotItemProps) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name, rating, description, id, photos, categories, difficulty, comments} = spotItem;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    useEffect(() => {
        dispatch(setSpotItemId(id.toString()));
    }, [id]);

    const showReviewPopup = () => {
        if (Cookies.get("token")) {
            return (
                <>
                    <div className="overlay"/>
                    <Popup
                        review
                        spotId={id}
                        closePopup={closePopup}
                        isPopupOpen={isPopupOpen}
                        setIsPopupOpen={setIsPopupOpen}
                    />
                </>)
        } else {
            navigate(RoutePath.auth_login);
        }
    }

    return (
        <div className={s.wrapper}>
            {isPopupOpen && showReviewPopup()}
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
                    <div className="buttons__link">
                        <Button extraClass={classNames("button", "button_green")} action={openPopup}>
                            Оставить отзыв
                        </Button>
                    </div>
                </div>
                <ReviewBlock comments={comments}/>
            </section>
        </div>
    )
}