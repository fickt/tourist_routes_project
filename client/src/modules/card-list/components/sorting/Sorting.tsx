import React, {useState, useEffect, memo} from "react";
import s from "./styles.module.scss";
import ArrowDownIcon from "./assets/arrowDownIcon.svg";
import {useAppSelector} from "storage/hookTypes";
import {useDispatch} from "react-redux";
import {getLocation, TLocationFail, TLocationSuccess} from "components/ymap/helpers/location";
import {imageSearchRoutes, setNewRoutes} from "modules/image-search-popup";
import {handleSpots, sortErrorMessage, spotsSelector, TPoints} from "modules/card-list";
import {sort} from "modules/card-list/constants/constants";

// Функция для вычисления расстояния между двумя координатами
function calculateDistance(point1: TPoints, point2:  TPoints) {
    const radiusOfEarth = 6371; // Радиус Земли в километрах
    const lat1 = deg2rad(point1.lat);
    const lon1 = deg2rad(point1.lon);
    const lat2 = deg2rad(point2.lat);
    const lon2 = deg2rad(point2.lon);

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = radiusOfEarth * c;
    return distance;
}

// Функция для преобразования градусов в радианы
function deg2rad(degrees: number) {
    return degrees * (Math.PI / 180);
}

export const Sorting = memo(() => {
    const dispatch = useDispatch();
    const localRoutes = useAppSelector(spotsSelector);
    const searchRoutesByImage = useAppSelector(imageSearchRoutes);
    const [isSortFromTheBest, setSortFromTheBest] = useState(true);
    const [isSortFromDistance, setSortFromDistance] = useState(true);
    const [userLocation, setUserLocation] = useState(null);
    const [routesToSort, setRoutesToSort] = useState(localRoutes);

    useEffect(() => {
        sortSpots(isSortFromTheBest);
    }, [isSortFromTheBest]);

    useEffect(() => {
        searchRoutesByImage && setRoutesToSort(searchRoutesByImage);
    }, [searchRoutesByImage, localRoutes]);

    useEffect(() => {
        getLocation(handleLocationSuccess, handleLocationFail);
    }, []);

    const toggleClick = () => setSortFromTheBest(!isSortFromTheBest);

    const handleLocationSuccess: TLocationSuccess = (pos) => {
        setUserLocation({lat: pos.coords.latitude, lon: pos.coords.longitude});
    };

    const handleLocationFail: TLocationFail = (err) => {
        console.error(sortErrorMessage, err);
    };

    const sortSpots = (isSortFromTheBest: boolean) => {
        const newRoutes = [...routesToSort].sort((a, b) => {
            if (isSortFromTheBest) {
                return b.rating - a.rating;
            } else {
                return a.rating - b.rating;
            }
        });
        routesToSort === localRoutes
            ? dispatch(handleSpots(newRoutes))
            : dispatch(setNewRoutes(newRoutes));
    }

    const sortSpotsByDistance = (isSortFromDistance:boolean, userLocation: TPoints) => {
        setSortFromDistance(!isSortFromDistance);
        const newRoutes = [...routesToSort].sort((a, b) => {
            if (isSortFromDistance) {
                const distanceA = calculateDistance(userLocation, {lat: a.latitude, lon: a.longitude});
                const distanceB = calculateDistance(userLocation, {lat: b.latitude, lon: b.longitude});
                return distanceA - distanceB;
            } else {
                const distanceA = calculateDistance(userLocation, {lat: a.latitude, lon: a.longitude});
                const distanceB = calculateDistance(userLocation, {lat: b.latitude, lon: b.longitude});
                return distanceB - distanceA;
            }
        });
        routesToSort === localRoutes
            ? dispatch(handleSpots(newRoutes))
            : dispatch(setNewRoutes(newRoutes));
    }

    return (
        <div className={s.sort}>
            <button className={s.sort__button} onClick={toggleClick}>
                <span className={s.sort__title}>{sort.rating}</span>
                <div className={isSortFromTheBest ? s.sort__button__icon_up : ""}>
                    <ArrowDownIcon/>
                </div>
            </button>
            <button className={s.sort__button} onClick={() => sortSpotsByDistance(isSortFromDistance, userLocation)}>
                <span className={s.sort__title}>{sort.distance}</span>
                <div className={isSortFromDistance ? s.sort__button__icon_up : ""}>
                    <ArrowDownIcon/>
                </div>
            </button>
        </div>
    )
});