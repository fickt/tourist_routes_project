import s from "./styles.module.scss";
import { redirectToProfile } from "modules/questions/constants/questionsRedirects";
import { useNavigate } from "react-router-dom";
import { QuestionsButton } from "modules/questions/components/questions-buttons/QuestionsButton";
import { useAppDispatch } from "storage/hookTypes";
import { handleRecommended } from "modules/questions/store/questionsActions";

export const QuestionsPreview = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const redirect = () => redirectToProfile(navigate);

    const redirectToQuestions = () => {
        dispatch(handleRecommended(true));
    }

    return (
        <>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите анкетирование.</p>
            <QuestionsButton title="Пройти" redirect={redirect} action={redirectToQuestions} />
        </>
    )
}