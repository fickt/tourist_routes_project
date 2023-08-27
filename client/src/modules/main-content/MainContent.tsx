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

export const MainContent = () => {

    const dispatch = useAppDispatch();
    const [searchValue, setSearchValue] = useState(""); 
    const debounceSearchValue = useDebounce(searchValue, 500);

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
                .then(data => dispatch(getSpotRoutes(data.data)))
                .catch(err => console.warn(err))            
    }

    useEffect(() => {
        handleSearchRequest()
    }, [debounceSearchValue])

    return (
        <>
            <section className={classNames("content-section", s.section)} style={{backgroundImage: `url(${backImage})`}}>
                <SearchForm
                    placeholder={"Найти лучший маршрут"}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange} 
                />
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content">
                    <CardList />
                </div>
            </section>
        </>
    )
}