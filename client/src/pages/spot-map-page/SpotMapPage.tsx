import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleChosenMapSpot} from "modules/card-list/store/spotsActions";
import {YMapComponent} from "components/ymap/YMapComponent";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {chosenMapSpotSelector, spotsSelector} from "modules/card-list/store/spotsSelectors";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {useNavigate, useParams} from "react-router-dom";
import {TLocalRoute} from "utils/localRoutes";
import {TMarker, TMarkers} from "utils/serverRoutes";
import {Popup} from "ui/popup/Popup";
import {toggleReviewPopup} from "ui/popup/store/popupActions";
import {reviewPopupState} from "ui/popup/store/popupSelector";

export const SpotMapPage = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {spotId} = useParams();
    const chosenMapSpot = useAppSelector(chosenMapSpotSelector);
    const spotRoutes: TLocalRoute[] = useAppSelector(spotsSelector);
    const mapSpots: TMarkers = useAdaptedSpotsType(spotRoutes);
    const reviewPopup = useAppSelector(reviewPopupState);

    const closeReviewPopup = () => dispatch(toggleReviewPopup(false));
    const loadReviewPopupData = async () => await dispatch(toggleReviewPopup(true));

    const transformSpotId = () => {
        let cleanedSpotId = spotId.replace(":", "");
        return parseInt(cleanedSpotId, 10);
    }

    useEffect(() => {
        const spotIdAsNumber = transformSpotId();
        if (spotIdAsNumber && mapSpots.length && !chosenMapSpot) {
            const foundSpot: TMarker | undefined = mapSpots.find((spot: TMarker) =>
                spot.id === spotIdAsNumber
            );
            foundSpot && dispatch(handleChosenMapSpot(foundSpot));
            loadReviewPopupData();
        }
    }, [transformSpotId, mapSpots, chosenMapSpot, dispatch, navigate]);

    return (
        <>
            {reviewPopup && (
                <>
                    <div className="overlay"/>
                    <Popup review spotId={transformSpotId()} popup={reviewPopup} closePopup={closeReviewPopup}/>
                </>
            )}
            {chosenMapSpot !== null
                ? (<YMapComponent markers={[chosenMapSpot]}/>)
                : <PreloaderCar/>
            }
        </>
    );
};