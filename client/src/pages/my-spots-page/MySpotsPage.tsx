import React, {useEffect} from "react";
import {CardList} from "modules/card-list";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {authLoader} from "modules/auth-form/store/authSelectors";
import s from "./styles.module.scss";
import {userRoutesPass} from "modules/my-spots/store/routesPassSelector";
import {getRoutesPass} from "modules/my-spots/api/routePassApi";
import {routesPassMessage} from "modules/my-spots/constants/constants";

export const MySpotsPage = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const routesPass = useAppSelector(userRoutesPass);

    useEffect(() => {
        const fetchData = async () => {
            await getRoutesPass(dispatch);
        }
        fetchData();
    }, [dispatch]);

    const hasRoutesPass = routesPass !== null && routesPass.length > 0;

    return (
        <div className="wrapper">
            {loader &&  <div className={s.routesPassWrapper}><PreloaderCar/></div>}
            {!loader && hasRoutesPass && <CardList routesPass spots={routesPass}/>}
            {!loader && !hasRoutesPass && <div className={s.routesPassWrapper}><ErrorMessage errorText={routesPassMessage}/></div>}
        </div>
    );
}