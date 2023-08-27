import { Rate } from "antd";
import s from "./styles.module.scss";
import { TReviewProps } from "./types";

export const Review = ({ user, content, rating }: TReviewProps) => {

    return (
        <div className={s.review}>
            <div className={s.review__name}>{user.nickname}</div>
            <div className={s.review__date}>10.08.2023</div>
            <Rate value={rating} disabled/>
            <p className={s.review__content}>{content}</p>
        </div>
    );
};