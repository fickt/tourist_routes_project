export type TMarker = {
    id: number,
    coordinates: [number, number],
    name: string,
    description: string,
    iconImageSize: [number, number],
    iconImageOffset: [number, number],
    picture: string,
    rating: number
}

export type TMarkers = TMarker[];