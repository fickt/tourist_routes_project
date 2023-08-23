import { RootState } from "storage/reduxTypes";

export const isRecommended = (state: RootState) => state.questions.isRecommended;