import React, {useEffect} from "react";
import s from "./styles.module.scss";
import {TagList} from "components/filters-tag/FiltersTag";
import classNames from "classnames";
import {Slider} from "modules/spot-item/components/slider/Slider";
import {RatingLabel} from "modules/spot-item/components/rating-label/RatingLabel";
import {setSpotItemId} from "modules/spot-item/store/spotItemActions";
import {useDispatch} from "react-redux";
import {TSpotItemProps} from "./types";
import {ReviewBlock} from "modules/review-block";
import {Button} from "ui/button/Button"
import {useAppSelector} from "storage/hookTypes";
import {authUser} from "modules/auth-form";
import {RoutePath} from "pages/routeConfig";
import {useNavigate} from "react-router-dom";
import {userRoutesPass} from "modules/my-spots";
import {FilterTag, routePassText} from "modules/filters";
import {Popup, reviewPopupState, toggleReviewPopup} from "components/popup";
import {reviews, setReview} from "modules/spot-item/constants/constants";

export const SpotItem = ({spotItem}: TSpotItemProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useAppSelector(authUser);
    const reviewPopup = useAppSelector(reviewPopupState);
    const routesPass = useAppSelector(userRoutesPass);
    const passMark = routesPass?.some(pass => pass.id === spotItem.id);
    const {name, rating, description, id, photos, categories, difficulty, comments} = spotItem;
    const body = document.querySelector("body") as HTMLElement | null;

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        dispatch(setSpotItemId(id.toString()));
    }, [id]);

    const closeReviewPopup = () => {
        body && body.classList.remove("disable-scroll");
        dispatch(toggleReviewPopup(false));
    }

    const openReviewPopup = () => user
        ? dispatch(toggleReviewPopup(true)) && body && body.classList.add("disable-scroll")
        : navigate(RoutePath.auth_login);

    return (
        <div className={s.wrapper}>
            {reviewPopup && (
                <>
                    <div className="overlay"/>
                    <Popup review spotId={id} popup={reviewPopup} closePopup={closeReviewPopup}/>
                </>
            )}
            <section className={classNames(s.section, s.slider)}>
                {passMark && <div className={s.routePass}><FilterTag passRoute text={routePassText}/></div>}
                <Slider photos={photos} name={name}/>
                <div className={s.tags}>
                    <TagList tagList={[difficulty]}/>
                    <TagList tagList={categories}/>
                </div>
            </section>
            <section className={classNames(s.section, s.description)}>
                <h2 className={s.description__title}>{name}</h2>
                <div className={s.section__text}>{description}</div>
            </section>
            <section className={classNames(s.section, s.reviews)}>
                <div className={s.reviews__info}>
                    <h2 className={s.reviews__info__title}>{reviews} {comments.length !== 0 && comments.length}</h2>
                    <RatingLabel rating={rating}/>
                </div>
                <div className="buttons__wrapper">
                    <div className="buttons__link">
                        <Button extraClass={classNames("button", "button_green")} action={openReviewPopup}>
                            {setReview}
                        </Button>
                    </div>
                </div>
                <ReviewBlock comments={comments}/>
            </section>
        </div>
    )
}