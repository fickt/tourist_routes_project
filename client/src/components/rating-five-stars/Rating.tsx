import s from "./styles.module.scss";
import StarIcon from "./img/star.svg";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { MAX_COUNT_RATING } from "./constants";


type IRatingProps = {
    isEditable?: boolean, 
    currentRating: number, 
    setCurrentRating?: (number:number) => void,
    error?: any
}

function Rating({isEditable = false, currentRating, setCurrentRating, error}: IRatingProps) {

    const [ratingArray, setRatingArray] = useState(new Array(MAX_COUNT_RATING).fill(<></>)) //новый пассив из 5 звезд

    const constructRating = (filledRating:number) => {

        const updateRatingArray = ratingArray.map((star, i) => {
            let starValue = i + 1
            return (
                /* с помощью classNames добавляю класс заливки при true */
                <StarIcon className={classNames(s.star,
                    {
                        [s.filled]: filledRating > i,
                        [s.editable]: isEditable
                    
                    })}
                    onMouseEnter={() => changeDisplay(starValue)}
                    onMouseLeave={() => changeDisplay(currentRating)}
                    onClick={() => changeRating(starValue)}
                />
            )
        } )
        
        setRatingArray(updateRatingArray);
    }

    function changeDisplay(rating:number) {
        if (!isEditable || !setCurrentRating) return
        constructRating(rating)
    }

    function changeRating(rating:number) {      
        if (!isEditable || !setCurrentRating) return //если isEditable = false или setCurrentRating не пришла в пропсы, то ничего не делать
        setCurrentRating(rating)
    }

    useEffect(() => constructRating(currentRating), [currentRating])

    return ( 
    <div className="rating__container">        
        {ratingArray.map((star, i) => <span key={i} className={s.spn}>{star}</span>)}
        {error && <p className="error-message">{error.message}</p>}
    </div>
     );
}

export default Rating;