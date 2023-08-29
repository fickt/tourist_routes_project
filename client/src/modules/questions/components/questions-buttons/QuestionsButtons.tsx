import { Button } from "ui/button/Button";
import { TQuestionsButtonProps } from "./types";
import { useAppDispatch } from "storage/hookTypes";
import { handleRecommended, handleStartPassQuestions } from "modules/questions/store/questionsActions";
import { RoutePath } from "pages/routeConfig";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const QuestionsButtons = ({ title }: TQuestionsButtonProps) => {

    const dispatch = useAppDispatch();
    const saveResults = () => dispatch(handleRecommended(true));
    const startPassQuestions = () => dispatch(handleStartPassQuestions(true));

    return (
        <div className="buttons__wrapper">
            {title == "Сохранить"
                ? <Link className="buttons__link" to={RoutePath.profile}>
                    <Button extraClass={classNames("button", "button_green")} action={saveResults}>
                        {title}
                    </Button>
                </Link>
                : <Link className="buttons__link" to={RoutePath.questions}>
                    <Button extraClass={classNames("button", "button_green")} action={startPassQuestions}>
                        {title}
                    </Button>
                </Link>
            }
            <Link className="buttons__link" to={RoutePath.profile}>
                <Button extraClass={classNames("button", "button_white")}>Позже</Button>
            </Link>
        </div>
    )
}