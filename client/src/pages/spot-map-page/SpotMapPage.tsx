import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {YMapComponent} from "components/ymap/YMapComponent";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {useNavigate, useParams} from "react-router-dom";
import {TLocalRoute} from "utils/localRoutes";
import {TMarker, TMarkers} from "utils/serverRoutes";
import {Popup} from "components/popup/Popup";
import {toggleReviewPopup} from "components/popup/store/popupActions";
import {reviewPopupState} from "components/popup/store/popupSelector";
import {spotsSelector} from "modules/card-list";
import {RoutePath} from "pages/routeConfig";

export const SpotMapPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {spotId} = useParams();
    const spotRoutes: TLocalRoute[] = useAppSelector(spotsSelector);
    const mapSpots: TMarkers = useAdaptedSpotsType(spotRoutes);
    const reviewPopup = useAppSelector(reviewPopupState);

    const transformSpotId = () => {
        let cleanedSpotId = spotId.replace(":", "");
        return parseInt(cleanedSpotId, 10);
    }

    const spotIdAsNumber = transformSpotId();
    const closeReviewPopup = () => dispatch(toggleReviewPopup(false));
    const openReviewPopup = async () => await dispatch(toggleReviewPopup(true));
    const foundSpot: TMarker | undefined = mapSpots.find((spot: TMarker) => spot.id === spotIdAsNumber);

    useEffect(() => {
        !foundSpot && navigate(RoutePath.not_found);
    }, [])

    useEffect(() => {
        spotIdAsNumber && mapSpots.length && !foundSpot && openReviewPopup();
    }, [transformSpotId, mapSpots, foundSpot, dispatch, navigate]);

    return (
        <>
            {reviewPopup && (
                <>
                    <div className="overlay"/>
                    <Popup review spotId={transformSpotId()} popup={reviewPopup} closePopup={closeReviewPopup}/>
                </>
            )}
            {foundSpot !== null ? <YMapComponent markers={[foundSpot]}/> : <PreloaderCar/>}
        </>
    );
};