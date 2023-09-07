import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleChosenMapSpot, handleChosenSpot, handleSpots} from "modules/card-list/store/spotsActions";
import {SpotItem} from "modules/spot-item";
import {TLocalRoute} from "utils/localRoutes";
import {chosenSpotSelector, spotsSelector} from "modules/card-list/store/spotsSelectors";
import {useAdaptedSpotType} from "hooks/useAdaptedSpotType";

export const SpotPage = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const {spotId} = useParams();
    const spotItem: TLocalRoute = useAppSelector(chosenSpotSelector);

    useEffect(() => {
        if (spotId) {
            dispatch(handleSpots(spotRoutes));
            getSpotById(spotId);
        }
    }, [spotId, spotRoutes])

    const getSpotById = (spotId: string) => {
        const foundSpot = spotRoutes.find((spot: TLocalRoute) => spot.id === Number(spotId));

        if (foundSpot) {
            const updatedFoundSpot = useAdaptedSpotType(foundSpot);
            dispatch(handleChosenSpot(foundSpot));
            dispatch(handleChosenMapSpot(updatedFoundSpot));
        }
    }

    return (
        <>
            {spotItem && (
                <div className="wrapper">
                    <div className="content container">
                        <SpotItem spotItem={spotItem}/>
                    </div>
                </div>)
            }
        </>
    );
}