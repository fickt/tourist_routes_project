import React, { memo } from "react";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelector } from "modules/card-list/store/spotsSelectors";
import { LocalCard } from "components/local-card/LocalCard";
import { CardListHeader } from "../card-list-header/CardListHeader";

export const CardList = memo(() => {

    const spots = useAppSelector(spotsSelector);

    return (
        <div className={s.wrapper}>
            <CardListHeader title="Наши Маршруты"/>
            <div className={s.cards}>
                {spots?.map((spot) => <LocalCard key={spot.id} {...spot} />)}
            </div>
        </div>
    );
});
