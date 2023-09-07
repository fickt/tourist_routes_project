import React, {memo} from "react";
import s from "modules/card-list/components/card-list-body/styles.module.scss";
import {TLocalRoute} from "utils/localRoutes";
import {LocalCard} from "components/local-card/LocalCard";
import {CardListComponentProps} from "modules/card-list/components/card-list-body/types";

export const CardListBody = memo(({activeFavMark, spots}: CardListComponentProps) => {

    return (
        <div className={s.cards}>
            {spots?.map((spot: TLocalRoute) =>
                <LocalCard key={spot.id} {...spot} activeFavMark={activeFavMark}/>)}
        </div>
    );
});
