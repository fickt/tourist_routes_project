import { Button } from "ui/button/Button";
import s from "./styles.module.scss";
import classNames from "classnames";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { FilterItem } from "../filter-item/FilterItem";

export const Filters = () => {

    const handleApplyFilters = () => {

    }

    const handleCancelFilters = () => {
        
    }

    const categories = ["Озера", "Горы", "Реки", "Исторические места", "Пещеры", "Парки", "Заповедники", "Горнолыжные комплексы", "Курганы", "Леса"]
    const difficulty = ["Новичок", "Знающий", "Опытный"]

    return (
        <div className={classNames(s.wrapper)}>
            <ContentHeader title="Фильтр"/>
            <div className={s.filters}>
                <FilterItem title="Места отдыха" list={categories}/>
                <FilterItem title="Места отдыха" list={difficulty}/>
            </div>
            <div className={s.buttons__wrapper}>
                <Button extraClass={classNames(s.button, s.button_apply)} action={handleApplyFilters}>Применить</Button>
                <Button extraClass={classNames(s.button, s.button_cancel)} action={handleCancelFilters}>Сбросить фильры</Button>
            </div>

        </div>
    )
}
