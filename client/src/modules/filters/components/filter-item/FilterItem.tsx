import s from "./styles.module.scss";
import { TFilterItemProps } from "./types";
import { TagList } from "../tag-list/TagList";

export const FilterItem = ({ title, list }: TFilterItemProps) => {      

    return (
        <div className={s.filters__item}>
            <h2 className={s.item__title}>{title}</h2>
            <div className={s.item__tags}>
                <TagList title={title} list={list}/>
            </div>
        </div>
    )
}