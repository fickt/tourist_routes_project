import {RoutePath} from "pages/routeConfig";
import {api, AUTH_TOKEN} from "utils/api";
import {IAnswers} from "modules/questions/api/type";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";

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

    sendAnswer(answers: IAnswers[]): Promise<AxiosResponse<TLocalRoute>> {
        return api.post(RoutePath.spots + "/recommendations/questionnaire", answers)
    }
}

export const apiQuestions = new QuestionsServise();