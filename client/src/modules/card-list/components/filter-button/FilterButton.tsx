import { Link } from "react-router-dom";
import FilterBtnICon from "./images/filter-button.svg";
import s from "./styles.module.scss";
import { RoutePath } from "pages/routeConfig";

export const FilterButton = () => {

    return (
        <Link to={RoutePath.filters}>
            <span className={s.button}>
                <FilterBtnICon />
            </span>
        </Link>
    )
}