import s from "./styles.module.scss";
import { QuestionsPreview } from "modules/questions/components/questions-preview/QuestionsPreview";
import { QuestionCard } from "modules/questions/components/question-card/QuestionCard";
import { useAppSelector } from "storage/hookTypes";
import { isRecommended } from "modules/questions";

export const Questions = () => {

    const recommended = useAppSelector(isRecommended);

    return (
        <div className={s.questionsForm}>
            <h2 className={s.questionsForm__title}>Анкета</h2>
            {recommended
                ? <QuestionCard />
                : <QuestionsPreview />
            }
        </div>
    )
}