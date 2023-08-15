import s from "./styles.module.scss";
import { memo } from "react";
import Card from "components/card/Card";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelectors } from "modules/card-list/store/spotsSelectors";
import InstaCard from "components/instaCard/InstaCard";

export const CardList = memo(() => {

    const spots = useAppSelector(spotsSelectors);

    return (
        <div className={s.cards}>
            {spots?.map((spot) => <InstaCard key={spot.id} {...spot} />)}
        </div>
    );
});
