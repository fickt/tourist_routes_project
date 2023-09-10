import React, {memo} from "react";
import s from "./styles.module.scss";
import {TLocalRoute} from "utils/localRoutes";
import {LocalCard} from "components/local-card/LocalCard";
import {CardListBodyProps} from "./types";

export const CardListBody = memo(({activeFavMark, spots}: CardListBodyProps) => {

    return (
        <div className={s.cards}>
            {spots?.map((spot: TLocalRoute) =>
                <LocalCard key={spot.id} spot={spot} activeFavMark={activeFavMark}/>)}
        </div>
    );
});
