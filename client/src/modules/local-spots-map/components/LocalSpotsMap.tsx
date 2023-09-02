import {YMapComponent} from "components/ymap/YMapComponent";
import {TMarker} from "components/ymap/constants/markers";
import {useAdaptedSpotsType} from "hooks/useAdaptedSpotType";
import {localSpots} from "utils/localRoutes";

export const LocalSpotsMap = () => {

    const mapSpots: TMarker[] = useAdaptedSpotsType(localSpots);

    return (
        <div>
            <YMapComponent markers={mapSpots}/>
        </div>
    )
}