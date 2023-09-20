import {RoutePath} from "pages/routeConfig";
import {api} from "utils/api";
import {TAnswers} from "modules/questions/api/type";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";

export class QuestionsService {
    fetchRecommendations() {
        return api.get(RoutePath.routes + "/recommendations");
    }

    fetchQuestions() {
        return api.get(RoutePath.routes + "/recommendations/questionnaire")
    }

    sendAnswer(answers: TAnswers[]): Promise<AxiosResponse<TLocalRoute>> {
        return api.post(RoutePath.routes + "/recommendations/questionnaire", answers)
    }
}

export const apiQuestions = new QuestionsService();