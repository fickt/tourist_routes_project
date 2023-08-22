import FilterBtnICon from "./images/filter-button.svg";
import s from "./styles.module.scss";
import { TFilterButtonProps } from "./types";

export const FilterButton = ({onClick}:TFilterButtonProps) => {

    return (
        <button onClick={onClick} className={s.button}><FilterBtnICon /></button>
    )
}