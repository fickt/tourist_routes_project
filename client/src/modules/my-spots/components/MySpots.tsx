import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {isError, isLoader} from "components/loader-error";
import {userRoutesPass} from "modules/my-spots/store/routesPassSelector";
import {getRoutesPass} from "modules/my-spots/api/routePassApi";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {routesPassMessage} from "modules/my-spots/constants/constants";
import {EmptyList} from "components/empty-list/EmptyList";
import {CardList} from "modules/card-list";

export const MySpots = () => {
    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const routesPass = useAppSelector(userRoutesPass);

    useEffect(() => {
        !routesPass && fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        await getRoutesPass(dispatch);
    }

    const hasRoutesPass = routesPass !== null && routesPass.length > 0 && <CardList routesPass spots={routesPass}/>;

    return (
        <div className="myList">
            {loader ? <PreloaderCar /> : error
                ? <ErrorMessage errorText={error}/> : hasRoutesPass || <EmptyList text={routesPassMessage} />}
        </div>
    )
}