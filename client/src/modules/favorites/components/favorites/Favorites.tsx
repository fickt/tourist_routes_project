import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {getFavSpots, userFavoritesSpots} from "modules/favorites";
import {isError, isLoader} from "components/loader-error";
import {CardList} from "modules/card-list";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {EmptyList} from "components/empty-list/EmptyList";
import {favMessage} from "modules/favorites/constants/constants";

export const Favorite = () => {
    const dispatch = useAppDispatch();
    const favSpots = useAppSelector(userFavoritesSpots);
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);

    useEffect(() => {
        fetchData();
    }, [favSpots, dispatch]);

    const fetchData = async () => {
        !favSpots && await getFavSpots(dispatch);
    }

    const cardList = favSpots !== null && favSpots.length > 0 && <CardList favPage spots={favSpots}/>;

    return (
        <div className="myList">
            {loader ? <PreloaderCar /> : error
                ? <ErrorMessage errorText={error}/> : cardList || <EmptyList fav text={favMessage} />}
        </div>
    );
}