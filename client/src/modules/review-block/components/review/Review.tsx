import s from "./styles.module.scss";
import {TReviewProps} from "./types";
import {RatingLabel} from "modules/spot-item";

export const Review = ({user, content, rating, created_at}: TReviewProps) => {
    const formattedDate = (created_at: Date) => {
        const options: Intl.DateTimeFormatOptions = {day: "numeric", month: "long", year: "numeric"};
        return new Date(created_at).toLocaleDateString("ru-RU", options);
    };

    return (
        <div className={s.review}>
            <div className={s.review__header}>
                <div className={s.review__header__info}>{user.nickname}, {formattedDate(created_at)}</div>
                <RatingLabel rating={rating}/>
            </div>
            <p className={s.review__content}>{content}</p>
        </div>
    );
};