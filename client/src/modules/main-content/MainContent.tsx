import React, { FormEvent, useState } from "react";
import s from "./styles.module.scss";
import { SearchForm } from "components/search/SearchForm";
import { CardList } from "modules/card-list";
import backImage from "./assets/bg.jpg";
import classNames from "classnames";

export const MainContent = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    const handleSearchClick = (e: FormEvent) => {
        e.preventDefault();
        setSearchValue("");
    }

    return (
        <>
            <section className={classNames("content-section", s.section)} style={{backgroundImage: `url(${backImage})`}}>
                <SearchForm
                    placeholder={"Найти лучший маршрут"}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange} />
            </section>
            <section className={classNames("content-section", s.routes)}>
                <div className="container content">
                    <CardList />
                </div>
            </section>
        </>
    )
}