import {YMapComponent} from "components/ymap/YMapComponent";
import {TMarker} from "components/ymap/constants/markers";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {TLocalRoute} from "utils/localRoutes";

export const LocalSpotsMap = () => {

    const spotRoutes: TLocalRoute[] = useAppSelector(spotsSelector);
    const mapSpots: TMarker[] = useAdaptedSpotsType(spotRoutes);

    return (
        <div>
            <YMapComponent markers={mapSpots}/>
        </div>
    )
}