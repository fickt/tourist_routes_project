import { Card } from "components/card";
import { useAppSelector } from "storage/hook-types";
import s from './styles.module.scss';

export function CardList() {

  const spots = useAppSelector(state => state.spots.data);
  
  return (
    <div className={s.cards}>
      {spots?.map((spot) => <Card key={spot.id} {...spot} />)}
    </div>
  );
}
