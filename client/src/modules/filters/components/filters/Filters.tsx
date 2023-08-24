import { Button } from "ui/button/Button";
import s from "./styles.module.scss";
import classNames from "classnames";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { FilterItem } from "../filter-item/FilterItem";
import { filterValues } from "modules/filters/constants/filterValues";
import { Link } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { useAppDispatch } from "storage/hookTypes";
import { resetFiltersAction } from "modules/filters/store/filtersActions";

export const Filters = () => {

    const dispatch = useAppDispatch()

    const handleCancelFilters = () => {
        dispatch(resetFiltersAction())
    }

    const categories = ["Озера", "Горы", "Реки", "Исторические места", "Пещеры", "Парки", "Заповедники", "Горнолыжные комплексы", "Курганы", "Леса"]
    const difficulty = ["Новичок", "Знающий", "Опытный"]

    return (
        <div className={classNames(s.wrapper)}>
            <ContentHeader title="Фильтр" />
            <div className={s.filters}>
                <FilterItem title={filterValues.category} list={categories} />
                <FilterItem title={filterValues.difficulty} list={difficulty} />
            </div>
            <div className={s.buttons__wrapper}>
                <Link to={RoutePath.home} className={s.buttons__link}>
                    <Button extraClass={classNames(s.button, s.button_apply)}>Применить</Button>
                </Link>
                <Link to={RoutePath.home} className={s.buttons__link}>
                    <Button extraClass={classNames(s.button, s.button_cancel)} action={handleCancelFilters}>
                        Сбросить фильры
                    </Button>
                </Link>
            </div>

        </div>
    )
}
