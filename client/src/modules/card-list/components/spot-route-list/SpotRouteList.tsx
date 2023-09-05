import React, {memo} from "react";
import s from "./styles.module.scss";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {LocalCard} from "components/local-card/LocalCard";
import {TLocalRoute} from "utils/localRoutes";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";

export const SpotRouteList = memo(() => {

    const spotRoutes = useAppSelector(spotsSelector);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);

    return (
        <>
            <h2>Серверный список мест</h2>
            <div className={s.cards}>
                {spotRoutes?.map((spot: TLocalRoute) => <LocalCard key={spot.id} {...spot} />)}
            </div>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </>
    );
});