import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {isLoader} from "components/loader-error";
import {userRoutesPass} from "modules/my-spots/store/routesPassSelector";
import {getRoutesPass} from "modules/my-spots/api/routePassApi";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {CardList} from "modules/card-list";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {routesPassMessage} from "modules/my-spots/constants/constants";

export const MySpots = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const routesPass = useAppSelector(userRoutesPass);
    const hasRoutesPass = routesPass !== null && routesPass.length > 0;

    useEffect(() => {
        !routesPass && fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        await getRoutesPass(dispatch);
    }

    return (
        <div className="wrapper">
            {loader &&  <PreloaderCar/>}
            {!loader && hasRoutesPass && <CardList routesPass spots={routesPass}/>}
            {!loader && !hasRoutesPass && <ErrorMessage errorText={routesPassMessage}/>}
        </div>
    )
}