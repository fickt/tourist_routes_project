import s from "./styles.module.scss";
import { Select } from "antd";
import { TSortingProps } from "./types";
import { sortTabs } from "modules/card-list/constants/sortOptions";

export const Sorting = ({ options }: TSortingProps) => {

    const handleChange = () => { // (value:string) 
        //some code
    }

    return (
        <div className={s.sort}>
            <span className={s.sort__title}>Сортировка:</span>
            <Select 
                defaultValue={sortTabs.rating.category}
                onChange={handleChange}
                options={options}
                className={s.selector}
            />
        </div>
    )
}
