import React, {useEffect} from "react";
import {CardList} from "modules/card-list";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {userRoutesPass} from "modules/my-spots/store/routesPassSelector";
import {getRoutesPass} from "modules/my-spots/api/routePassApi";
import {routesPassMessage} from "modules/my-spots/constants/constants";
import {isLoader} from "components/loader-error";

export const MySpotsPage = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const routesPass = useAppSelector(userRoutesPass);

    useEffect(() => {
        !routesPass && fetchData();
    }, [dispatch]);

    const fetchData = async () => {
        await getRoutesPass(dispatch);
    }

    const hasRoutesPass = routesPass !== null && routesPass.length > 0;

    return (
        <div className="wrapper">
            {loader &&  <PreloaderCar/>}
            {!loader && hasRoutesPass && <CardList routesPass spots={routesPass}/>}
            {!loader && !hasRoutesPass && <ErrorMessage errorText={routesPassMessage}/>}
        </div>
    );
}