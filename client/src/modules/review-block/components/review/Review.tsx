import s from "./styles.module.scss";
import {TReviewProps} from "./types";
import {RatingLabel} from "modules/spot-item/components/rating-label/RatingLabel";
import {formatDate} from "modules/review-block/components/constants/constants";

export const Review = ({user, content, rating, created_at}: TReviewProps) => {

    const formattedDate = formatDate(created_at);

    return (
        <div className={s.review}>
            <div className={s.review__header}>
                <div className={s.review__header__info}>{user.nickname} {formattedDate}</div>
                <RatingLabel rating={rating}/>
            </div>
            <p className={s.review__content}>{content}</p>
        </div>
    );
};