import { TLocalRoute } from "utils/localRoutes";
import { TMarker } from "components/ymap/constants/markers";

export function useAdaptedSpotType(spot: TLocalRoute | undefined): TMarker | null {
    if (spot) {
        return {
            id: spot.id,
            coordinates: [spot.latitude, spot.longitude],
            name: spot.name,
            description: spot.description,
            iconImageSize: [80, 80],
            iconImageOffset: [0, 0],
            picture: spot.photos[0],
            rating: spot.rating,
        };
    } else {
        return null;
    }
}