import s from "./styles.module.scss";
import { memo } from "react";
import Card from "components/card/Card";
import { useAppSelector } from "storage/hook-types";
import { spotsSelectors } from "modules/card-list/store/spots-selectors";

export const CardList = memo(() => {

    const spots = useAppSelector(spotsSelectors);

    return (
        <div className={s.cards}>
            {spots?.map((spot) => <Card key={spot.id} {...spot} />)}
        </div>
    );
});
