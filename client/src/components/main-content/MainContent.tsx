import React, { FormEvent, useState } from "react";
import s from "./styles.module.scss";
import { SearchForm } from "ui/search-form/SearchForm";

export const MainContent = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (value: string) => {
        setSearchValue(value);
    };

    const handleSearchClick  = (e: FormEvent) => {
        e.preventDefault();
        console.log(searchValue);
        setSearchValue("");
    }

    return (
        <div className={s.main__content}>
            <div className={s.main__header}>
                <h1 className={s.header__title}>Отправьтесь<br/>в чудесное путешествие</h1>
                <p className={s.header__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <SearchForm
                searchValue={searchValue}
                handleInputChange={handleInputChange}
                handleSearchClick={handleSearchClick}
            />
        </div>
    )
}