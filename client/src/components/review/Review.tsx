import { Rate } from "antd";
import s from "./styles.module.scss";
import { TReview } from "./types";

export const Review = ({ author, text, rating }: TReview) => {

    return (
        <div className={s.review}>
            <div className={s.review__name}>{author}</div>
            <div className={s.review__date}>10.08.2023</div>
            <Rate value={rating} disabled/>
            <p className={s.review__text}>{text}</p>
        </div>
    );
};