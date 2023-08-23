import s from "./styles.module.scss";
import { redirectToProfile } from "modules/questions/constants/questionsRedirects";
import { TQuestionsPreviewProps } from "modules/questions/components/questions-preview/type";
import { useNavigate } from "react-router-dom";
import { QuestionsButton } from "modules/questions/components/questions-buttons/QuestionsButton";

export const QuestionsPreview = ({ setStartQuestions }: TQuestionsPreviewProps) => {

    const navigate = useNavigate();
    const redirect = () => redirectToProfile(navigate);

    const redirectToQuestions = () => {
        setStartQuestions(true);
    }

    return (
        <>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите анкетирование.</p>
            <QuestionsButton title="Пройти" redirect={redirect} action={redirectToQuestions} />
        </>
    )
}