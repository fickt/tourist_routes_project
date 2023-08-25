import s from "./styles.module.scss";
import { sortOptions } from "modules/card-list/constants/sortOptions"
import { Sorting } from "../sorting/Sorting"
import { FilterButton } from "../filter-button/FilterButton"
import { TCardListHeaderProps } from "./types";
import { FiltersTags } from "../filters-tags/FiltersTag";

export const CardListHeader = ({ title }: TCardListHeaderProps) => {

    return (
        <div className={s.header}>
            <div className={s.header__title_block}>
                <h2>{title}</h2>
                <FilterButton />
            </div>
            <Sorting options={sortOptions} />
            <FiltersTags />
        </div>
    )
}