import { Link, To } from "react-router-dom";
import s from "./styles.module.scss";
import ArrowIcon from "./img/arrow.svg";
import { IContentHeaderProps } from "./types";
import { PREV_PAGE } from "./constants";

export const ContentHeader = ({ title, subtitle, children, to, textButton }: IContentHeaderProps) => {

  return (
    <>
      {textButton && 
      <Link to={to || PREV_PAGE as To} className={s.buttonBack}><ArrowIcon className={s.iconBack} />{textButton}</Link>}
      <h1 className={s.title}>{title}</h1>
      {subtitle && <span>{subtitle}</span>}
      {children}
    </>
  )
}
