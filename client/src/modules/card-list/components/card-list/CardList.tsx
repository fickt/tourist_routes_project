import {FC} from "react";
import s from "./styles.module.scss";
import { LocalCard } from "components/local-card/LocalCard";
import { CardListHeader } from "modules/card-list/components/card-list-header/CardListHeader";
import {CardListProps} from "modules/card-list/components/card-list/types";

export const CardList:FC<CardListProps> = ({spots}) => {


    return (
        <div className={s.wrapper}>
            <CardListHeader title="Наши Маршруты" />
            <div className={s.cards}>
                {spots?.map((spot) => <LocalCard key={spot.id} {...spot} />)}
            </div>
        </div>
    );
};
