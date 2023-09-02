import React, { FormEvent, useMemo, useEffect, useState } from "react";
import s from "./styles.module.scss";
import {SearchForm} from "components/search/SearchForm";
import {CardList} from "modules/card-list";
import backImage from "./assets/bg.jpg";
import classNames from "classnames";
import {useDebounce} from "hooks/useDebounce";
import {apiSpots} from "modules/card-list/api/SpotsServise";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleSpots} from "modules/card-list/store/spotsActions";
import ImageRecommendIcon from "./assets/imageReccomendIcon.svg";
import {ImageRecommendPopup} from "modules/image-recommend-popup/ImageRecommendPopup";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";

export const MainContent = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const debounceSearchValue = useDebounce(searchValue, 500);
    const spotRoutes = useAppSelector(spotsSelector);

    const filteredSpots = useMemo(() => {
        return spotRoutes?.filter(spot =>
            spot.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue, spotRoutes]);

    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleSearchClick = (e: FormEvent) => {
        e.preventDefault();
        handleSearchRequest();
        setSearchValue("");
    }

    const handleSearchRequest = () => {
        debounceSearchValue &&
        apiSpots.fetchSearchRequest(debounceSearchValue)
            .then(data => {
                dispatch(handleSpots(data.data))
                console.log(data.data);
            })
            .catch(err => console.warn(err))
    }

    return (
        <>
            {isPopupOpen && (
                <>
                    <div className={s.overlay} />
                    <ImageRecommendPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} closePopup={closePopup} />
                </>)
            }
            <section
                className={classNames("content-section", s.section)}
                style={{backgroundImage: `url(${backImage})`}}
            >
                <SearchForm
                    placeholder={"Поиск лучшего маршрута"}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange}
                />
                <button className={s.imageRecommend} onClick={openPopup}><ImageRecommendIcon /></button>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content"><CardList
                    spots={filteredSpots ?? spotRoutes}
                /></div>
            </section>
        </>
    )
}