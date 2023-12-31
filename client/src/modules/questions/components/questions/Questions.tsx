import s from "./styles.module.scss";
import {QuestionsPreview} from "modules/questions/components/questions-preview/QuestionsPreview";
import {QuestionCard} from "modules/questions/components/question-card/QuestionCard";
import {useAppSelector} from "storage/hookTypes";
import {isStartQuestions} from "modules/questions/store/questionsSelectors";

export const Questions = () => {

    const isStartPassQuestions = useAppSelector(isStartQuestions);

    return (
        <div className={s.questionsForm}>
            <h2 className={s.questionsForm__title}>Анкета</h2>
            {isStartPassQuestions ? <QuestionCard/> : <QuestionsPreview/>}
        </div>
    )
}