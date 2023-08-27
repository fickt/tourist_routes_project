import { StarIcon } from "ui/star-icon/StarIcon";
import { MAX_RATE } from "./constants";
import s from "./styles.module.scss";
import { TRatingStarProps } from "./types";

export const RatingStar = ({ rating = 5, id = 0 }: TRatingStarProps) => {

    const calculateRating = (rating: number, MAX_RATE: number) => {
        const relativeRating = (rating / MAX_RATE);
        return relativeRating.toFixed(2)
    }

    return (
        <span className={s.star_wrapper}>
            <span className={s.star}>
                <StarIcon rating={calculateRating(rating, MAX_RATE)} id={id} />
            </span>
            <span>{rating.toFixed(1)}</span>
        </span>
    )
}