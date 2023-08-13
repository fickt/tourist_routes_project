import s from "./styles.module.scss"
import SearchIcon from "./assets/search-icon.svg";
import { ISearchProps } from "./types";
import classNames from "classnames";

export const SearchForm = ({handleFormSubmit, handleInputChange, placeholder, searchValue}: ISearchProps) => {
    
  return (
    <form className={s.search} onSubmit={handleFormSubmit}>
      <input 
        type="text"
        value={searchValue}
        className={s.search_input} 
        onChange={(e) => {
        handleInputChange(e.target.value)}}
        placeholder={placeholder}
      />
      <button onClick={handleFormSubmit} className={classNames(s.search__btn, s.search__magnifier_btn)}><SearchIcon /></button>
    </form>
  )
}
