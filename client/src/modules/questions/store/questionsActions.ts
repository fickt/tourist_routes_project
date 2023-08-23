import { IS_RECOMMENDED } from "modules/questions/store/questionsActionsTypeNames";

export const handleRecommended = (payload: boolean) => ({
    type: IS_RECOMMENDED,
    payload: payload,
});
