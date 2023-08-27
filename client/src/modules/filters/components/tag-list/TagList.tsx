import { memo, useState } from "react";
import { TTagListProps } from "./types";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { filterCategories, filterDifficulties } from "modules/filters/store/filtersSelectors";
import { deleteFilterCategoryAction, deleteFilterDifficultyAction, setFilterCategoryAction, setFilterDifficultyAction } from "modules/filters/store/filtersActions";
import { filterValues } from "modules/filters/constants/filterValues";
import { FilterTag } from "../filter-tag/FilterTag";

export const TagList = memo(({list, title}:TTagListProps) => {

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

    const listItems = list.map((item, i) => {
                    
        const onClick = () => {
            handleClickTag(item)
        }

        const isActive = filters.includes(item)

        return (
            <FilterTag key={i} text={item} onClick={onClick} isActive={isActive}/>
        )
    })

    return <>{listItems}</>
})