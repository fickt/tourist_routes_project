import s from "./styles.module.scss";
import { TReview } from "./types";
import { Rating } from "components/rating-five-stars/Rating";

export const Review = ({author, text, rating}: TReview) => {

    return (
        <div className={s.review}>
            <div className={s.review__name}>{author}</div>
            <div className={s.review__date}>10.08.2023</div>
            <Rating currentRating={rating} />
            <p className={s.review__text}>{text}</p>
        </div>
    );
};