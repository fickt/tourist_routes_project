import React, {useEffect} from "react";
import {Button} from "ui/button/Button";
import s from "./styles.module.scss";
import classNames from "classnames";
import {FilterItem} from "modules/filters/components/filter-item/FilterItem";
import {categoriesTags, difficultyTags, filterValues} from "modules/filters/constants/filterValues";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {isError, isLoader, setError, setLoader} from "components/loader-error";
import {buttonsActions} from "modules/filters/constants/constants";
import {imageSearchRoutes, userFile} from "modules/image-search-popup";
import {TLocalRoute} from "utils/localRoutes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {dropFilters, sendRequest} from "modules/filters/api/filtersApi";
import {Dispatch} from "redux";

export const Filters = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const file = useAppSelector(userFile);
    const searchRoutesByImage = useAppSelector(imageSearchRoutes);
    const {categories, difficulties} = useAppSelector(state => state.filters);

    useEffect(() => {
        dispatch(setError(""));
        dispatch(setLoader(false));
    }, [])

    const closeWindow = () => navigate(RoutePath.home);
    const handleClick = () => handleApplyFilters(dispatch, searchRoutesByImage, categories, difficulties, closeWindow);
    const dropClick = () => handleCancelFilters(dispatch, file, closeWindow)

    const handleApplyFilters = (
        dispatch: Dispatch,
        searchRoutesByImage: TLocalRoute[],
        categories: string[],
        difficulties: string[],
        closeWindow: () => void
    ) => sendRequest(dispatch, searchRoutesByImage, categories, difficulties, closeWindow);

    const handleCancelFilters = (dispatch: Dispatch, file: File | null, closeWindow: () => void) => {
        dropFilters(dispatch, file, closeWindow);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.filters}>
                <FilterItem title={filterValues.category} list={categoriesTags}/>
                <FilterItem title={filterValues.difficulty} list={difficultyTags}/>
                {loader && <PreloaderCar/>}
                {!loader && (error && <ErrorMessage errorText={error}/>)}
            </div>
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button extraClass={classNames("button", "button_green")} action={handleClick} disabled={loader}>
                        {buttonsActions.use}
                    </Button>
                </div>
                <div className="buttons__link">
                    <Button extraClass={classNames("button", s.button__drop)} action={dropClick} disabled={loader}>
                        {buttonsActions.drop}
                    </Button>
                </div>
            </div>
        </div>
    )
};