import React from 'react';
import s from "modules/card-list/components/card-list-component/styles.module.scss";
import {TLocalRoute} from "utils/localRoutes";
import {LocalCard} from "components/local-card/LocalCard";
import {CardListComponentProps} from "modules/card-list/components/card-list-component/types";

export const CardListComponent = ({spots}: CardListComponentProps) => {
    return (
        <div className={s.cards}>
            {spots?.map((spot: TLocalRoute) => <LocalCard key={spot.id} {...spot} />)}
        </div>
    );
};
