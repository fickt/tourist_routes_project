import {TLocalRoute} from "utils/localRoutes";
import {TMarker} from "utils/serverRoutes";

function adaptLocalRouteToMarker(spot: TLocalRoute): TMarker {
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
}

export function useAdaptedSpotType(spot: TLocalRoute): TMarker {
    if (spot) {
        return adaptLocalRouteToMarker(spot);
    } else {
        return null;
    }
}

export function useAdaptedSpotsType(spotArray: TLocalRoute[]): TMarker[] {
    return spotArray.map(adaptLocalRouteToMarker);
}