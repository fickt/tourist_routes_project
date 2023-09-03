import {YMapComponent} from "components/ymap/YMapComponent";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {TLocalRoute} from "utils/localRoutes";
import {TMarkers} from "utils/serverRoutes";

export const LocalSpotsMap = () => {

    const spotRoutes: TLocalRoute[] = useAppSelector(spotsSelector);
    const mapSpots: TMarkers = useAdaptedSpotsType(spotRoutes);

    return (
        <>
            <YMapComponent markers={mapSpots}/>
        </>
    )
}