import {Review} from "modules/review-block/components/review/Review";
import s from "./styles.module.scss";
import {TReviewBlockProps} from "./types";
import {useDispatch} from "react-redux";
import {setReviews} from "modules/review-block/store/reviewActions";
import {useEffect} from "react";
import {useAppSelector} from "storage/hookTypes";
import {getReviews} from "modules/review-block/store/reviewSelectors";

export const ReviewBlock = ({comments}: TReviewBlockProps) => {

    const reviews = useAppSelector(getReviews);
    const dispatch = useDispatch();

    useEffect(() => {
        !reviews && dispatch(setReviews(comments));
    }, [])

    return (
        <div className={s.reviews_wrapper}>
            {comments?.length !== 0 && comments?.map((reviewData) =>
                <Review key={reviewData.id} {...reviewData} />)
            }
        </div>
    )
}