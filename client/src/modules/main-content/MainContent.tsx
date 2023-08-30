import React, { FormEvent, useEffect, useState } from "react";
import s from "./styles.module.scss";
import { SearchForm } from "components/search/SearchForm";
import { CardList } from "modules/card-list";
import backImage from "./assets/bg.jpg";
import classNames from "classnames";
import { useDebounce } from "hooks/useDebounce";
import { apiSpots } from "modules/card-list/api/SpotsServise";
import { useAppDispatch } from "storage/hookTypes";
import { getSpotRoutes } from "modules/card-list/store/spotsActions";
import ImageRecommendIcon from "./assets/imageReccomendIcon.svg";
import { ImageRecommendPopup } from "modules/image-recommend-popup/ImageRecommendPopup";

export const MainContent = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const debounceSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        handleSearchRequest()
    }, [debounceSearchValue])

    const handleInputChange = (value: string) => {
        setSearchValue(value);
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
                    dispatch(getSpotRoutes(data.data))
                    console.log(data.data);
                })
                .catch(err => console.warn(err))
    }

    const openPopup = () => {
        setIsPopupOpen(true);
    }
    const closePopup = () => {
        setIsPopupOpen(false);
    }

    return (
        <>
            {isPopupOpen && (
                <>
                    <div className={s.overlay} />
                    <ImageRecommendPopup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} closePopup={closePopup} />
                </>)
            }
            <section className={classNames("content-section", s.section)} style={{backgroundImage: `url(${backImage})`}}>
                <SearchForm
                    placeholder={"Поиск лучшего маршрута"}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange}
                />
                <button className={s.imageRecommend} onClick={openPopup}><ImageRecommendIcon /></button>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content"><CardList /></div>
            </section>
        </>
    )
}