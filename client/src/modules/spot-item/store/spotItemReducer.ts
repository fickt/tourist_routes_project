import {SpotType} from "modules/spot-item/store/spotItemActions";

type SpotId = {
    spotId: null | string
}

const initialState: SpotId = {
    spotId: null
}

export const spotItemReducer = (state = initialState, action: SpotType) => {
    switch (action.type) {
        case "SPOT_ID":
            return {
                ...state,
                spotId: action.payload
            }
        default:
            return state;
    }
}