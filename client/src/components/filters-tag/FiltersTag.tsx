import s from "./styles.module.scss";
import {TFilterTagsProps} from "./types";

export const TagList = ({tagList}: TFilterTagsProps) => {

    return (
        <div className={s.wrapper}>
            {tagList?.map((tag, index) => (
                <span key={index} className={s.tag}>{tag}</span>
            ))}
        </div>
    )
}