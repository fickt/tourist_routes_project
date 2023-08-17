import s from "./styles.module.scss";
import { memo } from "react";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelectors } from "modules/card-list/store/spotsSelectors";
import { Sorting } from "modules/card-list/components/Sorting/Sorting";
import { sortOptions } from "modules/card-list/constants/sortOptions";
import { InstaCard } from "components/insta-сard/InstaCard";

export const CardList = memo(() => {

    const spots = useAppSelector(spotsSelectors);

    return (
        <>
            <Sorting options={sortOptions} />
            <div className={s.cards}>
                {spots?.map((spot) => <InstaCard key={spot.id} {...spot} />)}
            </div>
        </>
    );
});
