import { YMapComponent } from "components/ymap/YMapComponent";
import { markers } from "components/ymap/constants/markers";

export const LocalSpotsMap = () => {

    return (
        <div>
            <YMapComponent markers={markers} />
        </div>
    )
}