import s from "./styles.module.scss";
import React, { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { spotRoutesSelector } from "modules/card-list/store/spotsSelectors";
import { apiSpots } from "modules/card-list/api/SpotsServise";
import { getSpotRoutes } from "modules/card-list/store/spotsActions";
import { SpotRoute } from "components/spot-route/SpotRoute";
import { TSpotRoute } from "modules/card-list/types/spotRoutes";
import { ErrorMessage } from "ui/error-message/ErrorMessage";
import { PreloaderCar } from "ui/preloader/PreloaderCar";

export const SpotRouteList = memo(() => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotRoutesSelector);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);   
    
    useEffect(() => {
        //пока не оформлял код ниже, закончил на стадии обработки ошибки
        if (!spotRoutes) {
            setLoading(true)
            apiSpots.fetchSpots()
                .then(data => {
                    dispatch(getSpotRoutes(data.data))
                })
                .catch(() => {
                    setError("Ошибка на стороне сервера")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [])

    return (
        <>
            <h2>Серверный список мест</h2>
            <div className={s.cards}>
                {spotRoutes?.map((spot: TSpotRoute) => <SpotRoute key={spot.id} {...spot} />)}
            </div>
            {loading && <PreloaderCar />}
            {!loading && (error && <ErrorMessage errorText={error} />)}
        </>
    );
});

