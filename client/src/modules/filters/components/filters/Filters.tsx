import {Button} from "ui/button/Button";
import s from "./styles.module.scss";
import classNames from "classnames";
import {ContentHeader} from "ui/content-header/ContentHeader";
import {FilterItem} from "modules/filters/components/filter-item/FilterItem";
import {categoriesTags, difficultyTags, filterValues} from "modules/filters/constants/filterValues";
import {Link} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {resetFiltersAction} from "modules/filters/store/filtersActions";
import {apiSpots} from "modules/card-list/api/spotsService";
import {setError} from "components/loader-error";
import {dropErrorMessage, filterErrorMessage} from "modules/filters/constants/constants";

export const Filters = () => {

    const dispatch = useAppDispatch();
    const {categories, difficulties} = useAppSelector(state => state.filters)

    const handleApplyFilters = () => {
        const categoryList = categories.join();
        const difficultyList = difficulties.join();

        apiSpots.fetchSpotFilter(difficultyList, categoryList)
            .then(response => {
                dispatch(handleSpots(response.data))
            })
            .catch(() => {
                dispatch(setError(filterErrorMessage))
            })
    }

    const handleCancelFilters = () => {
        dispatch(resetFiltersAction())
        apiSpots.fetchSpots()
            .then(response => {
                dispatch(handleSpots(response.data))
            })
            .catch(() => {
                dispatch(setError(dropErrorMessage))
            })
    }

    return (
        <div className={classNames(s.wrapper)}>
            <ContentHeader title={filterValues.filter}/>
            <div className={s.filters}>
                <FilterItem title={filterValues.category} list={categoriesTags}/>
                <FilterItem title={filterValues.difficulty} list={difficultyTags}/>
            </div>
            <div className={s.buttons__wrapper}>
                <Link to={RoutePath.home} className="buttons__link">
                    <Button extraClass={classNames("button", "button_green")} action={handleApplyFilters}>
                        Применить
                    </Button>
                </Link>
                <Link to={RoutePath.home} className="buttons__link">
                    <Button extraClass={classNames("button", "button_white")} action={handleCancelFilters}>
                        Сбросить фильтры
                    </Button>
                </Link>
            </div>
        </div>
    )
};