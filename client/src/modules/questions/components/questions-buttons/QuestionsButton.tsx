import { Button } from "ui/button/Button";
import { TQuestionsButtonProps } from "./types";
import s from "./styles.module.scss";
import { useAppDispatch } from "storage/hookTypes";
import { handleRecommended } from "modules/questions/store/questionsActions";
import { RoutePath } from "pages/routeConfig";
import { Link } from "react-router-dom";

export const QuestionsButton = ({ title }: TQuestionsButtonProps) => {

    const dispatch = useAppDispatch();

    const saveResults = () => {
        dispatch(handleRecommended(true));
    }

    const setRecommendations = () => {
        dispatch(handleRecommended(true));
    }

    return (
        <div className={s.buttonsGroup}>
            {title == "Сохранить"
                ? <Link to={RoutePath.profile}><Button action={saveResults}>{title}</Button></Link>
                : <Link to={RoutePath.questions}><Button action={setRecommendations}>{title}</Button></Link>
            }
            <Link to={RoutePath.profile}><Button>Позже</Button></Link>
        </div>
    )
}