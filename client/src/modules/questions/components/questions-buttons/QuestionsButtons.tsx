import {Button} from "ui/button/Button";
import {TQuestionsButtonProps} from "./types";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {handleRecommended, handleStartPassQuestions} from "modules/questions/store/questionsActions";
import {RoutePath} from "pages/routeConfig";
import {Link, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {isLoader, setError, setLoader} from "components/loader-error";
import {questionsValues, errorMessage} from "modules/questions/constants/constants";
import Cookies from "js-cookie";
import {apiQuestions} from "modules/questions/api/QuestionsService";

export const QuestionsButtons = ({title, answers, isSave}: TQuestionsButtonProps) => {
    const loader = useAppSelector(isLoader);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const saveResults = () => dispatch(handleRecommended(true));
    const startPassQuestions = () => dispatch(handleStartPassQuestions(true));

    const sendAnswers = () => {
        dispatch(setLoader(true));
        if (answers && answers.length > 0) {
            apiQuestions.sendAnswer(answers)
                .then(() => {
                    Cookies.set("is_questionnaire_completed", "true");
                    dispatch(setLoader(false))
                    navigate(RoutePath.profile);
                })
                .catch(() => {
                    dispatch(setError(errorMessage.buttons));
                });
        }
    }

    return (
        <div className="buttons__wrapper">
            {title == questionsValues.ready
                ? <>
                    {isSave && (
                        <div
                            onClick={sendAnswers}
                            className="buttons__link"
                        >
                            <Button
                                disabled={loader}
                                extraClass={classNames("button", "button_green")}
                                action={saveResults}
                            >
                                {title}
                            </Button>
                        </div>
                    )}
                </>
                : <Link className="buttons__link" to={RoutePath.questions}>
                    <Button extraClass={classNames("button", "button_green")} action={startPassQuestions}>
                        {title}
                    </Button>
                </Link>
            }
            {!isSave && (
                <Link className="buttons__link" to={RoutePath.profile}>
                    <Button extraClass={classNames("button", "button_white")}>{questionsValues.later}</Button>
                </Link>
            )}
        </div>
    )
}