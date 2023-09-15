import React, {memo} from "react";
import s from "./styles.module.scss";
import classNames from "classnames";
import {TFilterTagProps} from "./types";

export const FilterTag = memo(({passRoute, text, onClick, isActive}: TFilterTagProps) => {

    return (
        <span
            className={classNames(
                s.tags__item,
                {[s.tags__item_passRoute]: passRoute},
                {[s.tags__item_active]: isActive}
            )}
            onClick={onClick}
        >
            {text}
        </span>
    )
});