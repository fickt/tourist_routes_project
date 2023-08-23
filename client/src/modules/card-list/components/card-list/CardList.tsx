import React, { memo } from "react";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelector } from "modules/card-list/store/spotsSelectors";
import { sortOptions } from "modules/card-list/constants/sortOptions";
import { LocalCard } from "components/local-card/LocalCard";
import { Sorting } from "../sorting/Sorting";

export const CardList = memo(() => {
    
    const spots = useAppSelector(spotsSelector);

    return (
        <>
            <div className={s.header}>
                <h2>Наши маршруты</h2>
{/*                 <FilterButton onClick={handleFiltrationOn}/>
 */}            </div>            
            <Sorting options={sortOptions} />

            <h3>Локальный список мест</h3>
            <div className={s.cards}>
                {spots?.map((spot) => <LocalCard key={spot.id} {...spot} />)}
            </div>
        </>
    );
});
