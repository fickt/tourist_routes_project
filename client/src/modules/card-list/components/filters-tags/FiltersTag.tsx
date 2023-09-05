import {useAppSelector} from "storage/hookTypes";
import s from "./styles.module.scss";
import {filterCategories} from "modules/filters";

export const FiltersTags = () => {

    const tags = useAppSelector(filterCategories);

    return (
        <div className={s.wrapper}>
            {tags?.map((tag, index) => (
                <span key={index} className={s.tag}>{tag}</span>
            ))}
        </div>
    )
}