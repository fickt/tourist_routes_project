import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {SpotItem} from "modules/spot-item";
import {TLocalRoute} from "utils/localRoutes";
import {RoutePath} from "pages/routeConfig";
import {handleSpots, spotsSelector} from "modules/card-list";

export const SpotPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const spotRoutes = useAppSelector(spotsSelector);
    const {spotId} = useParams();
    const [foundSpot, setFoundSpot] = useState<TLocalRoute | null>(null);

    useEffect(() => {
        if (spotId) {
            dispatch(handleSpots(spotRoutes));
            getSpotById(spotId);
        }
    }, [spotId, spotRoutes])

    const getSpotById = (spotId: string) => {
        const foundSpot = spotRoutes.find((spot: TLocalRoute) => spot.id === Number(spotId));
        foundSpot ? setFoundSpot(foundSpot) : navigate(RoutePath.not_found);
    }

    return (<>
        {foundSpot && <div className="content container"><SpotItem spotItem={foundSpot}/></div>}
    </>)
}