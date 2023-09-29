import React, {memo} from "react";
import s from "./styles.module.scss";
import {Sorting} from "modules/card-list/components//sorting/Sorting";
import {FilterButton} from "modules/card-list/components/filter-button/FilterButton";
import {FiltersTags} from "modules/card-list/components/filters-tags/FiltersTag";

export const CardListHeader = memo(() => {

    return (
        <div className={s.header}>
            <div className={s.header__title_block}>
                <Sorting/>
                <FilterButton/>
            </div>
            <FiltersTags/>
        </div>
    )
});