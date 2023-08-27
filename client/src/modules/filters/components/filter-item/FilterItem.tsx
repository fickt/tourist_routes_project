import { useState } from "react";
import s from "./styles.module.scss";
import { TFilterItemProps } from "./types"
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { deleteFilterCategoryAction, deleteFilterDifficultyAction, setFilterCategoryAction, setFilterDifficultyAction } from "modules/filters/store/filtersActions";
import { filterValues } from "modules/filters/constants/filterValues";
import { filterCategories, filterDifficulties } from "modules/filters/store/filtersSelectors";

export const FilterItem = ({ title, list }: TFilterItemProps) => {

    const categories = useAppSelector(filterCategories);
    const difficulties = useAppSelector(filterDifficulties);
    const filters = categories && difficulties && [...categories, ...difficulties];
    const dispatch = useAppDispatch();
    const [activeTag, setActiveTag] = useState(false);

    const handleClickTag = (item: string) => {

        setActiveTag(!activeTag)
        switch (title) {
            case filterValues.category:
                categories.includes(item)
                    ? dispatch(deleteFilterCategoryAction(item))
                    : dispatch(setFilterCategoryAction(item))
                break;
            case filterValues.difficulty:
                difficulties.includes(item)
                    ? dispatch(deleteFilterDifficultyAction(item))
                    : dispatch(setFilterDifficultyAction(item))
                break;
            default:
                break;
        }
    }

    return (
        <div className={s.filters__item}>
            <h2 className={s.item__title}>{title}</h2>
            <div className={s.item__tags}>
                {list.map((item, i) => (
                    <span
                        key={i}
                        className={classNames(s.tags__item, { [s.tags__item_active]: filters.includes(item) })}
                        onClick={() => handleClickTag(item)}
                    >{item}
                    </span>
                ))}
            </div>
        </div>
    )
}