import {RoutePath} from "pages/routeConfig";
import {api, AUTH_TOKEN} from "utils/api";

export class QuestionsServise {
    fetchRecomendations() {
        const headers = {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        };
        return api.get(RoutePath.spots + "/recommendations", { headers });
    }

    fetchQuestions() {
        const headers = {
            Authorization: `Bearer ${AUTH_TOKEN}`
        }
        return api.get(RoutePath.spots + "/recommendations/questionnaire", {headers})
    }

}

export const apiQuestions = new QuestionsServise();