import Review from "components/review/Review";
import s from "./styles.module.scss"
import { reviews } from "modules/review-block/constants/reviews";
import { ReviewForm } from "modules/review-block/components/review-form/ReviewForm";
import { TReviewBlockProps } from "./types";

export const ReviewBlock = ({id}:TReviewBlockProps) => {

    return (
        <div className={s.reviews_wrapper}>
            {reviews?.length !==0 && reviews?.map((reviewData) => <Review key={reviewData._id} {...reviewData}/>)}
            <ReviewForm title="Отзыв о месте" productId={id}/>
        </div>
        
    )
}