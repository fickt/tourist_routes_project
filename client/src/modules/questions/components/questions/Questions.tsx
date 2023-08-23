import React, { useState } from "react";
import s from "./styles.module.scss";
import { QuestionsPreview } from "modules/questions/components/questions-preview/QuestionsPreview";
import { QuestionCard } from "modules/questions/components/question-card/QuestionCard";

export const Questions = () => {

    const [startQuestions, setStartQuestions] = useState(false);

    return (
        <div className={s.questionsForm}>
            <h2 className={s.questionsForm__title}>Анкета</h2>
            {startQuestions ? <QuestionCard /> : <QuestionsPreview setStartQuestions={setStartQuestions} />}
        </div>
    )
}