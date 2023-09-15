import s from "./styles.module.scss";
import {QuestionsButtons} from "modules/questions/components/questions-buttons/QuestionsButtons";
import QuestionnaireIcon from "./assets/questionnaire.svg";
import {questionsValues, questionPreviewText} from "modules/questions/constants/constants";

export const QuestionsPreview = () => {

    return (
        <div className={s.wrapper}>
            <QuestionnaireIcon/>
            <p className={s.preview__text}>{questionPreviewText}</p>
            <QuestionsButtons title={questionsValues.pass}/>
        </div>
    )
}