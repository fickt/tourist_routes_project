import { Button } from "ui/button/Button";
import s from "./styles.module.scss";
import { TFiltersProps } from "./types";
import classNames from "classnames";

export const Filters = ({onClick, isActive}:TFiltersProps) => {

    return (
        <div className={classNames(s.wrapper, { [s.filtration]: isActive })}>
            <h2>ФИЛЬТРЫ</h2>
            <Button action={onClick}>Сбросить фильры</Button>
        </div>
    )
}