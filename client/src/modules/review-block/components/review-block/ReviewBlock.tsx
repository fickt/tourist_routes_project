import {Review} from "components/review/Review";
import s from "./styles.module.scss";
import {reviews} from "modules/review-block/constants/reviews";
import {TReviewBlockProps} from "./types";

//Сейчас отзывы из reviews, но в будущем они будут приходить из comments
export const ReviewBlock = ({comments}: TReviewBlockProps) => {

    return (
        <div className={s.reviews_wrapper}>
            {reviews?.length !== 0 && reviews?.map((reviewData) =>
                <Review key={reviewData.id} {...reviewData} />)
            }
        </div>
    )
}