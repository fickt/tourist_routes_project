import React, {useState, useEffect, memo} from "react";
import s from "./styles.module.scss";
import ArrowDownIcon from "./assets/arrowDownIcon.svg";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {useDispatch} from "react-redux";
import {handleSpots} from "modules/card-list/store/spotsActions";

export const Sorting = memo(() => {

    const dispatch = useDispatch();
    const localRoutes = useAppSelector(spotsSelector);
    const [isSortFromTheBest, setSortFromTheBest] = useState(true);

    useEffect(() => {
        sortSpots(isSortFromTheBest);
    }, [isSortFromTheBest]);

    const toggleClick = () => {
        setSortFromTheBest(!isSortFromTheBest);
    }

    const sortSpots = (isSortFromTheBest: boolean) => {
        const sortRoutes = [...localRoutes].sort((a, b) => {
            if (isSortFromTheBest) {
                return b.rating - a.rating;
            } else {
                return a.rating - b.rating;
            }
        });
        dispatch(handleSpots(sortRoutes));
    }

    return (
        <div className={s.sort}>
            <span className={s.sort__title}>Сортировка:</span>
            <button className={s.sort__button} onClick={toggleClick}>
                <span className={s.sort__title}>Рейтинг</span>
                <div className={isSortFromTheBest ? s.sort__button__icon_up : ""}>
                    <ArrowDownIcon />
                </div>
            </button>
        </div>
    )
});
