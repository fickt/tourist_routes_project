import s from "./styles.module.scss";
import { memo} from "react";
import { useAppSelector } from "storage/hookTypes";
import { spotsSelector } from "modules/card-list/store/spotsSelectors";
import { Sorting } from "modules/card-list/components/Sorting/Sorting";
import { sortOptions } from "modules/card-list/constants/sortOptions";
import { LocalCard } from "components/localCard/LocalCard";

export const CardList = memo(() => {
    
    const spots = useAppSelector(spotsSelector);

    return (
        <>
            <Sorting options={sortOptions} />
            <h2>Локальный список мест</h2>
            <div className={s.cards}>
                {spots?.map((spot) => <LocalCard key={spot.id} {...spot} />)}
            </div>
        </>
    );
});
