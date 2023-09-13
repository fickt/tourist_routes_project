import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import {QuestionsButtons} from "modules/questions/components/questions-buttons/QuestionsButtons";
import {useEffect, useState} from "react";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {TAnswers} from "modules/questions/api/type";
import {Typography} from "antd";
import {useDispatch} from "react-redux";
import {useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {isError, isLoader, setError, setLoader} from "components/loader-error";
import {constants, questionCardText, questionErrorMessage} from "modules/questions/constants/constants";

export const QuestionCard = () => {

    const error = useAppSelector(isLoader);
    const loader = useAppSelector(isError);
    const [questions, setQuestions] = useState([])
    const [answers, setAnswers] = useState<TAnswers[]>([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const {Text} = Typography
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoader(true))
        apiQuestions.fetchQuestions()
            .then(response => {
                setQuestions(response.data.photos)
                dispatch(setLoader(false))
            })
            .catch(() => {
                dispatch(setError(questionErrorMessage))
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
                        title={constants.ready}
                    />
                </>
            ) : (
                <PreloaderCar/>
            )}
        </div>
    );
};
