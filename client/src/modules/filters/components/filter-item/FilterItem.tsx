import { SyntheticEvent, useState } from "react";
import s from "./styles.module.scss";
import { TFilterItemProps } from "./types"
import classNames from "classnames";

export const FilterItem = ({ title, list }: TFilterItemProps) => {

    const [activeTag, setActiveTag] = useState(false)

    const handleClickTag = (i:number) => {
        setActiveTag(!activeTag)
    }

    return (
        <div className={s.filters__item}>
            <h2 className={s.item__title}>{title}</h2>
            <div className={s.item__tags}>
                {list.map((item, i) => (
                    <span
                        key={i}
                        className={classNames(s.tags__item, {[s.tags__item_active]: activeTag})}
                        onClick={() => handleClickTag(i)}
                    >{item}
                    </span>
                ))}
            </div>
        </div>
    )
}