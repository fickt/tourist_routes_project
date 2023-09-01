import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import { QuestionsButtons } from "modules/questions/components/questions-buttons/QuestionsButtons";
import questionCardImage from "./assets/questionCardImage.png";

export const QuestionCard = () => {

    return (
        <div className={s.questionCard}>
            <p className={s.questionCard__text}>Выберите места, которые вам понравились, и мы сгнерируем на их основе ваши персональные рекомендации</p>
            <div className={s.questionCard__image} style={{backgroundImage: `url(${questionCardImage})`}}>
                <DislikeIcon className={s.questionCard__dislike} />
                <LikeIcon className={s.questionCard__like} />
            </div>
            <QuestionsButtons title="Сохранить" />
        </div>
    )
}