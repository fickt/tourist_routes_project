import React, {FormEvent, useMemo, useState, useEffect} from "react";
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
import {isFavMarkActive, isSpotsUpdated, userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {setSpotsUpdated} from "modules/favorites/store/favoriteActions";

export const MainContent = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const userFavoriteSpots = useAppSelector(userFavoritesSpots);
    const updatedSpots = useAppSelector(isSpotsUpdated);
    const activeFavMark = useAppSelector(isFavMarkActive);
    const [searchValue, setSearchValue] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const debounceSearchValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (userFavoriteSpots) {
            const updatedSpots = filteredSpots?.map((spot) => {
                const isActiveFavMark = userFavoriteSpots.some((favSpot) => favSpot.id === spot.id);
                return {
                    ...spot,
                    activeFavMark: isActiveFavMark,
                };
            });
            dispatch(setSpotsUpdated(updatedSpots));
            console.log(updatedSpots)
        } else {
            // Если user не имеет избранных мест, маркеры сбрасываются
            const updatedSpots = filteredSpots?.map((spot) => ({
                ...spot,
                activeFavMark: false,
            }));
            dispatch(setSpotsUpdated(updatedSpots));
        }
    }, [userFavoriteSpots, spotRoutes]);

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
        searchRequest();
        setSearchValue("");
    }

    const searchRequest = () => {
        debounceSearchValue &&
        apiSpots.fetchSearchRequest(debounceSearchValue)
            .then(data => {
                dispatch(handleSpots(data.data))
            })
            .catch(err => console.warn(err))
    }

    const spotsToShow = filteredSpots || (updatedSpots ? updatedSpots : spotRoutes);

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
                    <CardList spots={spotsToShow} activeFavMark={updatedSpots && activeFavMark}/>
                </div>
            </section>
        </>
    )
}