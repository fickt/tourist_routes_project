import { FormEvent, useState } from "react";
import s from "./styles.module.scss";
import { SearchForm } from "ui/search/SearchForm";
import { CardList } from "modules/card-list";
import backImage from "./assets/map_bg.jpg";

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
            <section className={s.map_section} style={{backgroundImage: `url(${backImage})`}}>
                <div className={s.main__header}>
                    <h1 className={s.header__title}>Отправьтесь<br />в чудесное путешествие</h1>
                    <p className={s.header__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <SearchForm
                    placeholder={'Найти лучший маршрут'}
                    searchValue={searchValue}
                    handleFormSubmit={handleSearchClick}
                    handleInputChange={handleInputChange} />
            </section>
            <section className={s.routes}>
                <div className="container content">
                    <h2 className={s.section__title}>Наши маршруты</h2>
                    <CardList />
                </div>
            </section>
        </>
    )
}