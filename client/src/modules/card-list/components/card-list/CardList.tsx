import React, {memo} from "react";
import s from "./styles.module.scss";
import {CardListHeader} from "modules/card-list/components/card-list-header/CardListHeader";
import {TCardListProps} from "modules/card-list/components/card-list/types";
import {CardListBody} from "modules/card-list";

export const CardList = memo(({spots, activeFavMark}: TCardListProps) => {

    return (
        <div className={s.wrapper}>
            <CardListHeader title="Наши Маршруты"/>
            <CardListBody spots={spots} activeFavMark/>
        </div>
    );
});