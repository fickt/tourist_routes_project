import {useAppSelector} from "storage/hookTypes";
import s from "./styles.module.scss";
import {filterCategories, filterDifficulties} from "modules/filters";

export const FiltersTags = () => {

    const categories = useAppSelector(filterCategories);
    const difficulties = useAppSelector(filterDifficulties);
    const tags =  [...categories, ...difficulties];

    return (
        <div className={s.wrapper}>
            {tags?.map((tag, index) => (
                <span key={index} className={s.tag}>{tag}</span>
            ))}
        </div>
    )
}