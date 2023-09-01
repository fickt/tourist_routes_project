import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { useEffect, useState } from "react";
import { markers, TMarker } from "components/ymap/constants/markers";
import { getLocalSpotsAction } from "modules/card-list/store/spotsActions";
import { YMapComponent } from "components/ymap/YMapComponent";

export const SpotMapPage = () => {
    const spotId = useAppSelector(state => state.spotId.spotId); // Adjust to match your actual state structure
    const spots = useAppSelector(state => state?.spots?.data);

    const [spotItem, setSpotItem] = useState<TMarker | null>(null);
    const dispatch = useAppDispatch();

    const getSpotById = (spotId: string) => {
        if (spots) {
            const foundSpot = spots.find(spot => spot.id === Number(spotId));
            setSpotItem(foundSpot || null);
        }
    };

    useEffect(() => {
        if (spotId) {
            dispatch(getLocalSpotsAction(markers));
            getSpotById(spotId);
        }
    }, [spotId, spots]);

    return (
        <>
            {spotItem && (
                <YMapComponent markers={[spotItem]}/>
            )}
        </>
    );
};