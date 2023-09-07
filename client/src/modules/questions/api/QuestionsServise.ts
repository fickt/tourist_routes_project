import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TAnswers} from "modules/questions/api/type";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";

export class QuestionsServise {
    fetchRecomendations() {
        return api.get(RoutePath.spots + "/recommendations");
    }

    fetchQuestions() {
        return api.get(RoutePath.spots + "/recommendations/questionnaire")
    }

    sendAnswer(answers: TAnswers[]): Promise<AxiosResponse<TLocalRoute>> {
        return api.post(RoutePath.spots + "/recommendations/questionnaire", answers)
    }
}

export const apiQuestions = new QuestionsServise();