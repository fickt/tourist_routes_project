import starIcon from "./assets/starIcon.png";
import s from "./styles.module.scss";
import {TRatingLabelProps} from "modules/spot-item/components/rating-label/types";

export const RatingLabel = ({rating}: TRatingLabelProps) => {

    return (
        <div className={s.rating}>
            <img src={starIcon} className={s.rating__image}/>
            <p className={s.rating__value}>{rating}</p>
        </div>
    )
}