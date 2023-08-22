import React, { FormEvent, useState } from "react";
import s from "./styles.module.scss";
import { SearchForm } from "components/search/SearchForm";
import { CardList } from "modules/card-list";
import backImage from "./assets/map_bg.jpg";
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
            <section className={classNames("content-section", s.map_section)} style={{backgroundImage: `url(${backImage})`}}>
                <div className={s.main__header}>
                    <h1 className={s.main__header_title}>Отправьтесь<br />в чудесное путешествие</h1>
                    <p className={s.main__header_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
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