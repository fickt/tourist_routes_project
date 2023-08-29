import { Link } from "react-router-dom";
import FilterBtnIcon from "./images/filter-button.svg";
import s from "./styles.module.scss";
import { RoutePath } from "pages/routeConfig";

export const FilterButton = () => {

    return (
        <Link to={RoutePath.filters}>
            <span className={s.button}>
                <FilterBtnIcon />
            </span>
        </Link>
    )
}