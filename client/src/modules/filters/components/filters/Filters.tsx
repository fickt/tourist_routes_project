import { Button } from "ui/button/Button";
import s from "./styles.module.scss";
import classNames from "classnames";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { FilterItem } from "modules/filters/components/filter-item/FilterItem";
import { categoriesTags, difficultyTags, filterValues } from "modules/filters/constants/filterValues";
import { Link } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { resetFiltersAction } from "modules/filters/store/filtersActions";
import { apiSpots } from "modules/card-list/api/SpotsServise";

export const Filters = () => {

    const dispatch = useAppDispatch();
    const { categories, difficulties } = useAppSelector(state => state.filters)

    const handleApplyFilters = () => {
        const categoryList = categories.join();
        const difficultyList = difficulties.join();

        apiSpots.fetchSpotFilter(difficultyList, categoryList)
            .then(data => console.log(data)
            )
            .catch(err => console.log(err)
            )
    }

    const handleCancelFilters = () => {
        dispatch(resetFiltersAction())
    }

    return (
        <div className={classNames(s.wrapper)}>
            <ContentHeader title="Фильтр" />
            <div className={s.filters}>
                <FilterItem title={filterValues.category} list={categoriesTags} />
                <FilterItem title={filterValues.difficulty} list={difficultyTags} />
            </div>
            <div className={s.buttons__wrapper}>
                <Link to={RoutePath.home} className={s.buttons__link}>
                    <Button extraClass={classNames(s.button, s.button_apply)} action={handleApplyFilters}>
                        Применить
                    </Button>
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
