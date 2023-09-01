import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { useEffect, useState } from "react";
import { TMarker } from "components/ymap/constants/markers";
import { handleSpots } from "modules/card-list/store/spotsActions";
import { YMapComponent } from "components/ymap/YMapComponent";
import { localSpots, TLocalRoute } from "utils/localRoutes";
import { useAdaptedSpotType } from "hooks/useAdaptedSpotType";

export const SpotMapPage = () => {

    const dispatch = useAppDispatch();
    const spotId = useAppSelector(state => state.spotId.spotId);
    const spots = localSpots;
    const [selectedSpot, setSelectedSpot] = useState<TMarker | null>(null);

    const getSpotById = (spotId: string) => {
        if (spots) {
            const foundSpot: TLocalRoute | undefined = spots.find((spot: TLocalRoute) =>
                spot.id === Number(spotId));
            const adaptedSpot = useAdaptedSpotType(foundSpot);
            setSelectedSpot(adaptedSpot);
        }
    };

    useEffect(() => {
        if (spotId) {
            dispatch(handleSpots(spots));
            getSpotById(spotId);
        }
    }, [spotId, spots]);

    return (
        <>
            {selectedSpot && (
                <YMapComponent markers={[selectedSpot]} />
            )}
        </>
    );
};