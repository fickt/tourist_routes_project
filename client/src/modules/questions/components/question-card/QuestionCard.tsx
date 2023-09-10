import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import {QuestionsButtons} from "modules/questions/components/questions-buttons/QuestionsButtons";
import {useEffect, useState} from "react";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {TAnswers} from "modules/questions/api/type";
import {Typography} from "antd";
import {useDispatch} from "react-redux";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {useAppSelector} from "storage/hookTypes";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {questionCardText, questionsValues} from "modules/questions/constants/questionsValues";
import {PreloaderCar} from "ui/preloader/PreloaderCar";

export const QuestionCard = () => {

    const [questions, setQuestions] = useState([])
    const error = useAppSelector(authError);
    const loader = useAppSelector(authLoader);
    const [answers, setAnswers] = useState<TAnswers[]>([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const {Text} = Typography
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleAuthLoader(true))
        apiQuestions.fetchQuestions()
            .then(response => {
                setQuestions(response.data.photos)
                dispatch(handleAuthLoader(false))
            })
            .catch(() => {
                dispatch(handleAuthError("Ошибка получения данных для анкеты"))
            });
    }, [])

    const handleAnswer = (isLiked: boolean) => {
        if (questionIndex < questions.length) {
            const updatedAnswers = [
                ...answers,
                {category: questions[questionIndex].category, is_liked: isLiked},
            ];

            setAnswers(updatedAnswers);
            setQuestionIndex(questionIndex + 1);
        }
    };

    return (
        <div className={s.questionCard}>
            <p className={s.questionCard__text}>
                {questionCardText}
            </p>
            {!loader ? (
                <>
                    <img className={s.questionCard__image} src={questions[questionIndex]} alt="Question Image"/>
                    {!error && questionIndex !== questions.length ? (
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
                    ) : (
                        <p>{error}</p>
                    )}
                    <QuestionsButtons
                        isSave={questionIndex === questions.length}
                        answers={answers}
                        title={questionsValues.ready}
                    />
                </>
            ) : (
                <PreloaderCar/>
            )}
        </div>
    );
};
