import React, {FormEvent, useMemo, useState} from "react";
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

export const MainContent = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const [searchValue, setSearchValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const debounceSearchValue = useDebounce(searchValue, 500);

    const filteredSpots = useMemo(() => {
        return spotRoutes?.filter(spot =>
            spot.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [searchValue, spotRoutes]);

    const inputChange = (value: string) => setSearchValue(value);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const searchClick = (e: FormEvent) => {
        e.preventDefault();
        handleSearchRequest();
        setSearchValue("");
    }

    const handleSearchRequest = () => {
        apiSpots.fetchSearchRequest(debounceSearchValue)
            .then(data => {
                dispatch(handleSpots(data.data))
            })
            .catch(err => console.warn(err))
    }

    return (
        <>
            {isPopupOpen && (
                <>
                    <div className="overlay"/>
                    <Popup
                        image
                        closePopup={closePopup}
                        isPopupOpen={isPopupOpen}
                        setIsPopupOpen={setIsPopupOpen}
                    />
                </>)
            }
            <section
                className={classNames("content-section", s.section)}
                style={{backgroundImage: `url(${backImage})`}}
            >
                <SearchForm
                    placeholder={"Поиск лучшего маршрута"}
                    searchValue={searchValue}
                    handleFormSubmit={searchClick}
                    handleInputChange={inputChange}
                />
                <button className={s.imageRecommend} onClick={openPopup}>
                    <ImageRecommendIcon/>
                </button>
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content">
                    <CardList spots={filteredSpots ?? spotRoutes}/>
                </div>
            </section>
        </>
    )
}