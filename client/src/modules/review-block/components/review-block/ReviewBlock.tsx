import Review from "components/review/Review";
import { reviews } from "../../constants/reviews";
import { ReviewForm } from "../review-form/ReviewForm";
import s from "./styles.module.scss"

export const ReviewBlock = ({id}:{id: number}) => {

    return (
        <div className={s.reviews_wrapper}>
            {reviews?.length !==0 && reviews?.map((reviewData) => <Review key={reviewData._id} {...reviewData}/>)}
            <ReviewForm title="Отзыв о месте" productId={id}/>
        </div>
        
    )
}