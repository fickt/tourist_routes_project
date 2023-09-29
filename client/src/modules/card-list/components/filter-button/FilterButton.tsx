import {Link} from "react-router-dom";
import FilterBtnIcon from "./images/filter-button.svg";
import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";

export const FilterButton = () => {

    return (
        <Link to={RoutePath.filters} className={s.filterBlock}>
            <button className={s.filterBlock__button}><FilterBtnIcon/></button>
            <span className={s.filterBlock__title}>Фильтр</span>
        </Link>
    )
}