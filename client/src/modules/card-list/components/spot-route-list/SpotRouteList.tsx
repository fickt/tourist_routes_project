import React, {memo, useEffect, useState} from "react";
import s from "./styles.module.scss";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {apiSpots} from "modules/card-list/api/SpotsServise";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {LocalCard} from "components/local-card/LocalCard";
import {TLocalRoute} from "utils/localRoutes";

export const SpotRouteList = memo(() => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //пока не оформлял код ниже, закончил на стадии обработки ошибки
        if (!spotRoutes) {
            setLoading(true)
            apiSpots.fetchSpots()
                .then(data => {
                    dispatch(handleSpots(data.data))
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
                {spotRoutes?.map((spot: TLocalRoute) => <LocalCard key={spot.id} {...spot} />)}
            </div>
            {loading && <PreloaderCar/>}
            {!loading && (error && <ErrorMessage errorText={error}/>)}
        </>
    );
});