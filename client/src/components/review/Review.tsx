<<<<<<< HEAD
import Rating from "components/rating-five-stars/Rating";
import s from "./styles.module.scss";
import { TReview } from "./types";
=======
import s from './styles.module.scss';
import { TReview } from './types';
import { Rating } from "components/rating-five-stars/Rating";
>>>>>>> 2728cce6f3531b503c1f24f5ca76276ad6240a10

const Review = ({author, text, rating}: TReview) => {

    return (
        <div className={s.review}>
            <div className={s.review__name}>{author}</div>
            <div className={s.review__date}>10.08.2023</div>
            <Rating currentRating={rating} />
            <p className={s.review__text}>{text}</p>
        </div>
    );
}

export default Review;