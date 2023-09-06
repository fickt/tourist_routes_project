import s from "./styles.module.scss";
import {QuestionsButtons} from "modules/questions/components/questions-buttons/QuestionsButtons";
import QuestionnaireIcon from "./assets/questionnaire.svg"
import {questionsValues} from "modules/questions/constants/questionsValues";

export const QuestionsPreview = () => {

    return (
        <div className={s.wrapper}>
            <QuestionnaireIcon/>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите
                анкетирование.</p>
            <QuestionsButtons title={questionsValues.pass}/>
        </div>
    )
}