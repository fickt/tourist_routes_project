import s from "./styles.module.scss";
import { memo } from "react";
import Card from "components/card/Card";
import { spotsSelectors } from "../../store/spots-selectors"
import { useAppSelector } from "storage/hook-types";
import { Search } from "ui/search/Search";

export const CardList = memo(() => {  
  
  const spots = useAppSelector(spotsSelectors)

  return (
    <div>
      <Search placeholder="Найти лучший маршрут" handleFormSubmit={() => console.log('submit')} handleInputChange={() => console.log('change')}/>
      <div className={s.cards}>
      {spots?.map((spot) => <Card key={spot.id} {...spot} />)}
    </div>
    </div>
    
  );
});
