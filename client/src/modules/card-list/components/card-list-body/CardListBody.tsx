import React, {memo} from "react";
import s from "./styles.module.scss";
import {TLocalRoute} from "utils/localRoutes";
import {LocalCard} from "components/local-card/LocalCard";
import {CardListBodyProps} from "./types";
import {AppRoutes, RoutePath} from "pages/routeConfig";
import FilterSvg from './assets/filter.svg';

export const CardListBody = memo(({spots}: CardListBodyProps) => {
    const isProfile = window.location.href.includes(RoutePath.profile);
    return (
        <div className={s.cards}>
            {isProfile &&
                <div className={s.cards__header}>
                    <h2 className={s.cards__header_title}>Рекомендации</h2>
                    <FilterSvg/>
                </div>
            }
            {spots?.map((spot: TLocalRoute) =>
                <LocalCard key={spot.id} spot={spot} />)}
        </div>
    );
});
