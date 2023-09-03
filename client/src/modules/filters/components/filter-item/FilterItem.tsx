import s from "./styles.module.scss";
import {TFilterItemProps} from "./types";
import {TagList} from "modules/filters/components/tag-list/TagList";

export const FilterItem = ({title, list}: TFilterItemProps) => {

    return (
        <div className={s.filters__item}>
            <h2 className={s.filters__item__title}>{title}</h2>
            <div className={s.filters__item__tags}>
                <TagList title={title} list={list}/>
            </div>
        </div>
    )
}