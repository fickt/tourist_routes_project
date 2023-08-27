import React from "react";
import s from "./styles.module.scss";
import { Select } from "antd";
import { TSortingProps } from "./types";
import { sortTabs } from "modules/card-list/constants/sortOptions";

export const Sorting = ({ options }: TSortingProps) => {

    return (
        <div className={s.sort}>
            <span className={s.sort__title}>Сортировка:</span>
            <Select 
                defaultValue={sortTabs.rating.category}
                options={options}
                className={s.selector}
            />
        </div>
    )
}
