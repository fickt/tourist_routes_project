import { IS_RECOMMENDED, START_PASS_QUESTIONS } from "modules/questions/store/questionsActionsTypeNames";

export const handleRecommended = (payload: boolean) => ({
    type: IS_RECOMMENDED,
    payload: payload,
});

export const handleStartPassQuestions = (payload: boolean) => ({
    type: START_PASS_QUESTIONS,
    payload: payload,
});