import React, {memo} from "react";
import s from "./styles.module.scss";
import {CardListHeader} from "modules/card-list/components/card-list-header/CardListHeader";
import {CardListProps} from "modules/card-list/components/card-list/types";
import {CardListComponent} from "modules/card-list/components/card-list-component/CardListComponent";

export const CardList = memo(({spots}: CardListProps) => {

    return (
        <div className={s.wrapper}>
            <CardListHeader title="Наши Маршруты"/>
            <CardListComponent spots={spots}/>
        </div>
    );
});