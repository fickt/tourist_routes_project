import { StarIcon } from "ui/rating-star";
import { COMPENSATION, MAX_RATE } from "./constants";
import s from "./styles.module.scss";

const RatingStar = ({rating=5}) => {    

    const calculateRating = (rating:number, MAX_RATE:number) => {

        const relativeRating = (rating / MAX_RATE) * COMPENSATION;
        return relativeRating.toFixed(2)
    }

    return (
        <>
            <span>
                <StarIcon rating={calculateRating(rating, MAX_RATE)}/>
                <span className={s.rating_number}>{rating.toFixed(1)}</span>
            </span>
        </>
    )
}

export default RatingStar;