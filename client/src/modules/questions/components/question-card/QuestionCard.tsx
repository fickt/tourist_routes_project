import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import {QuestionsButtons} from "modules/questions/components/questions-buttons/QuestionsButtons";
import {useEffect, useState} from "react";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {IAnswers} from "modules/questions/api/type";
import questionCardImage from "./assets/questionCardImage.png";
import {Typography} from "antd";

export const QuestionCard = () => {
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState<IAnswers[]>([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const {Text} = Typography
    useEffect(() => {
        apiQuestions.fetchQuestions()
            .then(response => {
                setQuestions(response.data.photos)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    const handleAnswer = (isLiked:boolean) => {
        if (questionIndex < questions.length) {
            const updatedAnswers = [
                ...answers,
                { category: questions[questionIndex].category, is_liked: isLiked },
            ];

            setAnswers(updatedAnswers);
            setQuestionIndex(questionIndex + 1);
        }
    };
    return (
        <div className={s.questionCard}>
            <p className={s.questionCard__text}>
                Выберите места, которые вам понравились, и мы сгенерируем на их основе
                ваши персональные рекомендации
            </p>
            <div
                className={s.questionCard__image}
                style={{ backgroundImage: `url(${questionCardImage})` }}
            ></div>
            {questionIndex !== questions.length && (
                <div className={s.questionCard__btns}>
                    <DislikeIcon
                        onClick={() => handleAnswer(false)}
                        className={s.questionCard__dislike}
                    />
                    <Text>или</Text>
                    <LikeIcon
                        onClick={() => handleAnswer(true)}
                        className={s.questionCard__like}
                    />
                </div>
            )}
            <QuestionsButtons
                isSave={questionIndex === questions.length}
                answers={answers}
                title="Готово"
            />
        </div>
    );
};
