import React, {useState, useEffect, memo} from "react";
import s from "./styles.module.scss";
import ArrowDownIcon from "./assets/arrowDownIcon.svg";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {useDispatch} from "react-redux";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {getLocation, TLocationFail, TLocationSuccess} from "components/ymap/helpers/location";
import {TPoints} from "modules/card-list/components/sorting/type";

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
    const [isSortFromTheBest, setSortFromTheBest] = useState(true);
    const [isSortFromDistance, setSortFromDistance] = useState(true);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        sortSpots(isSortFromTheBest);
    }, [isSortFromTheBest]);

    const toggleClick = () => {
        setSortFromTheBest(!isSortFromTheBest);
    }

    const sortSpots = (isSortFromTheBest: boolean) => {
        const sortRoutes = [...localRoutes].sort((a, b) => {
            if (isSortFromTheBest) {
                return b.rating - a.rating;
            } else {
                return a.rating - b.rating;
            }
        });
        dispatch(handleSpots(sortRoutes));
    }


    const sortSpotsByDistance = (isSortFromDistance:boolean, userLocation:  TPoints) => {
        setSortFromDistance(!isSortFromDistance)
        const sortRoutes = [...localRoutes].sort((a, b) => {
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
        dispatch(handleSpots(sortRoutes));
    }

    const handleLocationSuccess: TLocationSuccess = (pos) => {
        setUserLocation({lat: pos.coords.latitude, lon: pos.coords.longitude});
    };

    const handleLocationFail: TLocationFail = (err) => {
        console.error("Ошибка получения местоположения:", err);
    };

    useEffect(() => {
        getLocation(handleLocationSuccess, handleLocationFail);
    }, []);

    return (
        <div className={s.sort}>
            <span className={s.sort__title}>Сортировка:</span>
            <button className={s.sort__button} onClick={toggleClick}>
                <span className={s.sort__title}>Рейтинг</span>
                <div className={isSortFromTheBest ? s.sort__button__icon_up : ""}>
                    <ArrowDownIcon/>
                </div>
            </button>
            <button className={s.sort__button} onClick={() => sortSpotsByDistance(isSortFromDistance, userLocation)}>
                <span className={s.sort__title}>По удаленности</span>
                <div className={isSortFromDistance ? s.sort__button__icon_up : ""}>
                    <ArrowDownIcon/>
                </div>
            </button>
        </div>
    )
});