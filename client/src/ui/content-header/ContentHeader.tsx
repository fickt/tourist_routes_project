import s from "./styles.module.scss";
import { TContentHeaderProps } from "./types";

export const ContentHeader = ({ title, subtitle, children }: TContentHeaderProps) => {

    return (
        <>
            <h1 className={s.title}>{title}</h1>
            {subtitle && <span>{subtitle}</span>}
            {children}
        </>
    )
}
