import s from "./styles.module.scss";
import { QuestionsButtons } from "modules/questions/components/questions-buttons/QuestionsButtons";
import QuestionnaireIcon from './assets/questionnaire.svg'
export const QuestionsPreview = () => {

    return (
        <div className={s.wrapper}>
            <QuestionnaireIcon/>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите анкетирование.</p>
            <QuestionsButtons title="Пройти" />
        </div>
    )
}