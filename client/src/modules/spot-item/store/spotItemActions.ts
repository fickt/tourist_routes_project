import { SPOT_ID } from "modules/spot-item/store/types/spotItemTypes";

export const setSpotItemId = (payload: string | null) => ({
    type: SPOT_ID,
    payload: payload
})

export type SpotType = {
    type: typeof SPOT_ID,
    payload: string
}