import s from "./styles.module.scss"
import SearchIcon from './assets/search-icon.svg';
import { ISearchProps } from './types';
import classNames from "classnames";

export const Search = ({ handleFormSubmit, handleInputChange, placeholder }: ISearchProps) => {

    return (
        <form className={s.search} onSubmit={handleFormSubmit}>
            <input
                type="text"
                className={s.search_input}
                onChange={(e) => {handleInputChange(e.target.value)}}
                placeholder={placeholder}
            />
            <span className={classNames(s.search__btn, s.search__magnifier_btn)}><SearchIcon/></span>
        </form>
    )
}
