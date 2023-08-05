import { useAppSelector } from "storage/hook-types";
import s from "./styles.module.scss";
import React from "react";
import Card from "components/card";

const CardList = () => {

  const spots = useAppSelector(state => state.spots.data);
  
  return (
    <div className={s.cards}>
      {spots?.map((spot) => <Card key={spot.id} {...spot} />)}
    </div>
  );
}

export default React.memo(CardList)