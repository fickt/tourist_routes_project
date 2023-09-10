import React, {memo} from "react";
import {Review} from "modules/review-block/components/review/Review";
import s from "./styles.module.scss";
import {TReviewBlockProps} from "./types";

export const ReviewBlock = memo(({comments}: TReviewBlockProps) => {

    return (
        <div className={s.reviews_wrapper}>
            {comments?.length !== 0 && comments?.map((reviewData) =>
                <Review key={reviewData.id} {...reviewData} />)
            }
        </div>
    )
});