import s from "./styles.module.scss";
import { memo } from "react";
import Card from "components/card";
import { spotsSelectors } from "./store/spots-selectors"
import { useAppSelector } from "storage/hook-types";

const CardList = () => {  
  
  const spots = useAppSelector(spotsSelectors)

  return (
    <div className={s.cards}>
      {spots?.map((spot) => <Card key={spot.id} {...spot} />)}
    </div>
  );
}

export default memo(CardList)