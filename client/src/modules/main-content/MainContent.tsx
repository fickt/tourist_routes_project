import React from "react";
import s from "./styles.module.scss";
import { Search } from "ui/search/Search";

export const MainContent = () => {

    return (
        <div className={s.main__content}>
            <div className={s.main__header}>
                <h1 className={s.header__title}>Отправьтесь<br/>в чудесное путешествие</h1>
                <p className={s.header__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Search
                placeholder="Найти лучший маршрут"
                handleFormSubmit={() => console.log("submit")}
                handleInputChange={() => console.log("change")}
            />
        </div>
    )
}