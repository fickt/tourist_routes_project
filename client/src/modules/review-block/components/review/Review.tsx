import s from "./styles.module.scss";
import {TReviewProps} from "./types";
import {RatingLabel} from "modules/spot-item/components/rating-label/RatingLabel";

export const Review = ({user, content, rating}: TReviewProps) => {

    return (
        <div className={s.review}>
            <div className={s.review__header}>
                <div className={s.review__header__info}>{user.nickname} ?ДАТА?</div>
                <RatingLabel rating={rating}/>
            </div>
            <p className={s.review__content}>{content}</p>
        </div>
    );
};