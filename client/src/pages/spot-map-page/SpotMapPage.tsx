import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {TMarker} from "components/ymap/constants/markers";
import {handleChosenMapSpot} from "modules/card-list/store/spotsActions";
import {YMapComponent} from "components/ymap/YMapComponent";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {chosenMapSpotSelector, spotsSelector} from "modules/card-list/store/spotsSelectors";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {useParams} from "react-router-dom";
import {TLocalRoute} from "utils/localRoutes";

export const SpotMapPage = () => {

    const {spotId} = useParams();
    const dispatch = useAppDispatch();
    const chosenMapSpot = useAppSelector(chosenMapSpotSelector);
    const spotRoutes: TLocalRoute[] = useAppSelector(spotsSelector);
    const mapSpots: TMarker[] = useAdaptedSpotsType(spotRoutes);

    useEffect(() => {
        if (spotId && mapSpots.length > 0) {
            const foundSpot: TMarker | undefined = mapSpots.find((spot: TMarker) =>
                spot.id === Number(spotId)
            );
            if (foundSpot) {
                dispatch(handleChosenMapSpot(foundSpot));
            }
        }
    }, [spotId, mapSpots, dispatch]);

    return (
        <>
            {chosenMapSpot !== null
                ? (<YMapComponent markers={[chosenMapSpot]}/>)
                : <PreloaderCar/>
            }
        </>
    );
};