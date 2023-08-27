import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import { redirectToProfile } from "modules/questions/constants/questionsRedirects";
import { useAppDispatch } from "storage/hookTypes";
import { handleRecommended } from "modules/questions/store/questionsActions";
import { useNavigate } from "react-router-dom";
import { QuestionsButton } from "modules/questions/components/questions-buttons/QuestionsButton";

export const QuestionCard = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const redirect = () => redirectToProfile(navigate);

    const saveResults = () => {
        dispatch(handleRecommended(true));
        redirectToProfile(navigate);
    }

    return (
        <div className={s.questionCard}>
            <p className={s.questionCard__text}>Выберите понравившееся места.</p>
            <div className={s.questionCard__image}>
                <DislikeIcon className={s.questionCard__dislike} />
                <LikeIcon className={s.questionCard__like} />
            </div>
            <QuestionsButton title="Сохранить" redirect={redirect} action={saveResults} />
        </div>
    )
}