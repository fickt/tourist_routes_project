import s from "./styles.module.scss";
import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { spotRoutesSelector } from "modules/card-list/store/spotsSelectors";
import SpotsService from "modules/card-list/api/SpotsServise";
import { getSpotRoutes } from "modules/card-list/store/spotsActions";
import SpotRoute from "components/spot-route/SpotRoute";

export const SpotRouteList = memo(() => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotRoutesSelector); 
    
    useEffect(() => {
        SpotsService.fetchSpots()
            .then(data => {
                dispatch(getSpotRoutes(data.data))
            })
    }, [])

    return (
        <>
            <h2>Серверный список мест</h2>
            <div className={s.cards}>
                {spotRoutes?.map((spot: any) => <SpotRoute key={spot.id} {...spot} />)}
            </div>

        </>
    );
});

