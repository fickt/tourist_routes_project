import React, {FormEvent, useEffect, useState} from "react";
import s from "./styles.module.scss";
import {SearchForm} from "components/search/SearchForm";
import {CardList} from "modules/card-list";
import backImage from "./assets/bg.jpg";
import classNames from "classnames";
import {useDebounce} from "hooks/useDebounce";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {Popup} from "ui/popup/Popup";
import ImageRecommendIcon from "./assets/imageReccomendIcon.svg";
import {apiSpots} from "modules/card-list/api/spotsService";
import {imgPopupState} from "ui/popup/store/popupSelector";
import {toggleImgPopup} from "ui/popup/store/popupActions";
import {imageSearchRoutes} from "modules/image-search-popup";
import {theBestRoute} from "./constants/constants";
import {setError} from "components/loader-error";
import {setFile} from "modules/image-search-popup/store/imageSearchActions";

export const MainContent = () => {
    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const searchRoutesByImage = useAppSelector(imageSearchRoutes);
    const imgPopup = useAppSelector(imgPopupState);
    const [searchValue, setSearchValue] = useState("");
    const [filteredSpots, setFilteredSpots] = useState(null);
    const debounceSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (searchValue.trim() === "") {
            setFilteredSpots(searchRoutesByImage || spotRoutes);
        } else {
            const routesToFilter = searchRoutesByImage || spotRoutes;
            setFilteredSpots(routesToFilter.filter(spot =>
                spot.name.toLowerCase().includes(searchValue.toLowerCase())));
        }
    }, [searchValue, spotRoutes, searchRoutesByImage])

    const inputChange = (value: string) => setSearchValue(value);
    const closeImgPopup = () => dispatch(toggleImgPopup(false));

    const openImgPopup = () => {
        dispatch(setFile(null));
        dispatch(toggleImgPopup(true));
    }

    const searchClick = (e: FormEvent) => {
        e.preventDefault();
        handleSearchRequest();
        setSearchValue("");
    }

    const handleSearchRequest = () => {
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
                <SearchForm
                    placeholder={theBestRoute}
                    searchValue={searchValue}
                    handleFormSubmit={searchClick}
                    handleInputChange={inputChange}
                />
                <button className={s.imageRecommend} onClick={openImgPopup}>
                    <ImageRecommendIcon/>
                </button>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content">
                    <CardList spots={filteredSpots || searchRoutesByImage || spotRoutes}/>
                </div>
            </section>
        </>
    )
}