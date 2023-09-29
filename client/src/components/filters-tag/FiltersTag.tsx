import s from "./styles.module.scss";
import {TFilterTagsProps} from "./types";

export const TagList = ({tagList}: TFilterTagsProps) => {

    const difficultyClass: Record<string, string> = {
        "новичок": s.tag__difficulty__easy,
        "знающий": s.tag__difficulty__middle,
        "опытный": s.tag__difficulty__hard,
    };

    return (
        <div className={s.wrapper}>
            {tagList?.map((tag, index) => (
                <span key={index} className={difficultyClass[tag] || s.tag}>{tag}</span>
            ))}
        </div>
    )
}