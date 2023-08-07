import { ReactNode } from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.scss"
import { Button } from "antd";
import { TMarker } from "modules/ymap/constants/markers";

type props = TMarker & { children?: ReactNode }

const Card = ({ id, name, description, coordinates, picture, children }: props) => {  

  return (
    <>
      <article className={s.card}>
        <Link to={`/spots/${id}`} className={s.card__link}>
          <div className={s.card__desc}>
            <h3 className={s.card__name}>{name}</h3>
            <span>{description}</span>
          </div>
          <div className={s.imgWrapper}>
            <img className={s.card__image} src={picture} />
          </div>
        </Link>
        <Button className={s.button} type="primary" href={`https://yandex.ru/maps/?rtext=~${coordinates[0]},${coordinates[1]}`} target="_blank">Открыть в Яндекс Картах</Button>
        {children}
      </article>
    </>
  );
}

export default Card;
