import React, {FormEvent, useEffect, useState} from "react";
import s from "./styles.module.scss";
import {SearchForm} from "components/search/SearchForm";
import {apiSpots, CardList, handleSpots, spotsSelector} from "modules/card-list";
import backImage from "./assets/bg.png";
import classNames from "classnames";
import {useDebounce} from "hooks/useDebounce";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import ImageRecommendIcon from "./assets/imageReccomendIcon.svg";
import {imageSearchRoutes, setFile} from "modules/image-search-popup";
import {theBestRoute} from "./constants/constants";
import {setError} from "components/loader-error";
import {imgPopupState, Popup, toggleImgPopup} from "components/popup";
import {filterCategories, filterDifficulties} from "modules/filters";
import {ratingSortSelectors} from "modules/card-list/components/sorting/store/ratingSortSelectors";
import {handleSort} from "modules/card-list/components/sorting/store/ratingSortAction";

export const MainContent = () => {
    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const searchRoutesByImage = useAppSelector(imageSearchRoutes);
    const imgPopup = useAppSelector(imgPopupState);
    const [searchValue, setSearchValue] = useState("");
    const debounceSearchValue = useDebounce(searchValue, 500);
    const body = document.querySelector("body") as HTMLElement | null;
    const categories = useAppSelector(filterCategories);
    const difficulties = useAppSelector(filterDifficulties);
    const tags = [...categories, ...difficulties];
    const isRatingSort = useAppSelector(ratingSortSelectors);

    useEffect(() => {
        if (debounceSearchValue.trim()) {
            handleSearchRequest();
        } else if (tags.length === 0) {
            apiSpots.fetchSpots()
                .then(data => {
                    dispatch(handleSpots(data.data))
                    dispatch(handleSort(!isRatingSort))
                })
                .catch(err => dispatch((setError(err))))
        }
    }, [debounceSearchValue]);

    const inputChange = (value: string) => setSearchValue(value);

    const closeImgPopup = () => {
        body && body.classList.remove("disable-scroll");
        dispatch(toggleImgPopup(false));
    }

    const openImgPopup = () => {
        body && body.classList.add("disable-scroll");
        dispatch(setError(""));
        dispatch(setFile(null));
        dispatch(toggleImgPopup(true));
    }

    const searchClick = (e: FormEvent) => {
        e.preventDefault();
        handleSearchRequest();
    }

    const handleSearchRequest = () => {
        debounceSearchValue &&
        apiSpots.fetchSearchRequest(debounceSearchValue)
            .then(data => dispatch(handleSpots(data.data)))
            .catch(err => dispatch((setError(err))));
    }

    return (
        <>
            {imgPopup && (
                <>
                    <div className="overlay"/>
                    <Popup image popup={imgPopup} closePopup={closeImgPopup}/>
                </>)
            }
            <section
                className={classNames("content-section", s.section)}
                style={{backgroundImage: `url(${backImage})`}}
            >
                <div className={s.section__search}>
                    <SearchForm
                        placeholder={theBestRoute}
                        searchValue={searchValue}
                        handleFormSubmit={searchClick}
                        handleInputChange={inputChange}
                    />
                    <button className={s.imageRecommend} onClick={openImgPopup}>
                        <ImageRecommendIcon/>
                    </button>
                </div>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content">
                    <CardList spots={searchRoutesByImage || spotRoutes}/>
                </div>
            </section>
        </>
    )
}