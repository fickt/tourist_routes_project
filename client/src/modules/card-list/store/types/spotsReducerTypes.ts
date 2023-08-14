import { TMarker } from "components/ymap/constants/markers"

export type TSpotsState = {
    data: TMarker[],
    loading: boolean,
    error: boolean,
    total: number
}