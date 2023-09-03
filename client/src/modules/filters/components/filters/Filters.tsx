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
import {spotsSelector} from "modules/card-list/store/spotsSelectors";

export const Filters = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const {categories, difficulties} = useAppSelector(state => state.filters);

    const handleApplyFilters = () => {
        let filteredArray = [...spotRoutes];

        if (categories.length > 0) {
            filteredArray = filteredArray.filter(spot =>
                spot.categories.some((category: string) => categories.includes(category))
            );
        }

        if (difficulties.length > 0) {
            filteredArray = filteredArray.filter(spot =>
                difficulties.includes(spot.difficulty)
            );
        }
        dispatch(handleSpots(filteredArray));
    };

    const handleCancelFilters = () => {
        dispatch(resetFiltersAction());
        dispatch(handleSpots(spotRoutes));
    };


    // Фильтрация когда будет бд
    /*
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
        dispatch(resetFiltersAction());
    };
    */

    return (
        <div className={classNames(s.wrapper)}>
            <ContentHeader title="Фильтр"/>
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
}
