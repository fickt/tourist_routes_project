import {Button} from "ui/button/Button";
import {TQuestionsButtonProps} from "./types";
import {useAppDispatch} from "storage/hookTypes";
import {handleRecommended, handleStartPassQuestions} from "modules/questions/store/questionsActions";
import {RoutePath} from "pages/routeConfig";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {setError, setLoader} from "components/loader-error";
import {constants, questionErrorServerConnect} from "modules/questions/constants/constants";

export const QuestionsButtons = ({title, answers, isSave}: TQuestionsButtonProps) => {

    const dispatch = useAppDispatch();
    const saveResults = () => dispatch(handleRecommended(true));
    const startPassQuestions = () => dispatch(handleStartPassQuestions(true));

    const sendAnswers = () => {
        dispatch(setLoader(true))
        if (answers && answers.length > 0) {
            apiQuestions.sendAnswer(answers)
                .then(response => {
                    console.log("Успешный ответ:", response);
                })
                .catch(() => {
                    dispatch(setError(questionErrorServerConnect))
                });
        }
    }

    return (
        <div className="buttons__wrapper">
            {title == constants.ready
                ? <>
                    {isSave && (
                        <Link onClick={sendAnswers} className="buttons__link" to={RoutePath.profile}>
                            <Button extraClass={classNames("button", "button_green")} action={saveResults}>
                                {title}
                            </Button>
                        </Link>
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
                    <Button extraClass={classNames("button", "button_white")}>{constants.later}</Button>
                </Link>
            )}
        </div>
    )
}