import React, { FormEvent } from "react";
import s from "./styles.module.scss";

type Props = {
    searchValue: string;
    handleInputChange: (value: string) => void;
    handleSearchClick: (e: FormEvent) => void;
}

export const SearchForm = ({ searchValue, handleInputChange, handleSearchClick }:Props) => {

    return (
        <form className={s.search}>
            <input
                type="text"
                value={searchValue}
                placeholder="Найти лучший маршрут"
                className={s.search__field}
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <button type="submit" className={s.search__submit} onClick={handleSearchClick} />
        </form>
    )
}