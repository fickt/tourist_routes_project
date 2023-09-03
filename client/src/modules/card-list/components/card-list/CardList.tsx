import React, {memo} from "react";
import s from "./styles.module.scss";
import {LocalCard} from "components/local-card/LocalCard";
import {CardListHeader} from "modules/card-list/components/card-list-header/CardListHeader";
import {TLocalRoute} from "utils/localRoutes";
import {CardListProps} from "modules/card-list/components/card-list/types";

export const CardList = memo(({spots}: CardListProps) => {

    return (
        <div className={s.wrapper}>
            <CardListHeader title="Наши Маршруты"/>
            <div className={s.cards}>
                {spots?.map((spot: TLocalRoute) => <LocalCard key={spot.id} {...spot} />)}
            </div>
        </div>
    );
});