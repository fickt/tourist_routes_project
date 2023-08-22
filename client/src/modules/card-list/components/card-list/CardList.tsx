import React, { memo, useState } from "react";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelector } from "modules/card-list/store/spotsSelectors";
import { Sorting } from "modules/card-list/components/Sorting/Sorting";
import { sortOptions } from "modules/card-list/constants/sortOptions";
import { LocalCard } from "components/localCard/LocalCard";
import { FilterButton } from "../filter-button/FilterButton";
import { Filters } from "../filters/Filters";

export const CardList = memo(() => {
    
    const spots = useAppSelector(spotsSelector);
    const [isFiltration, setIsFiltration] = useState(false);

    const handleFiltrationOn = () => {
        setIsFiltration(true)
    }

    const handleFiltrationOff = () => {
        setIsFiltration(false)
    }

    return (
        <>
            <FilterButton onClick={handleFiltrationOn}/>
            <Sorting options={sortOptions} />
            <h2>Локальный список мест</h2>
            <div className={s.cards}>
                {spots?.map((spot) => <LocalCard key={spot.id} {...spot} />)}
            </div>
            <Filters onClick={handleFiltrationOff} isActive={isFiltration}/>
        </>
    );
});
