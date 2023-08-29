import s from "./styles.module.scss";
import DislikeIcon from "./assets/dislike.svg";
import LikeIcon from "./assets/like.svg";
import { QuestionsButtons } from "modules/questions/components/questions-buttons/QuestionsButtons";

export const QuestionCard = () => {

    return (
        <div className={s.questionCard}>
            <p className={s.questionCard__text}>Выберите понравившееся места.</p>
            <div className={s.questionCard__image}>
                <DislikeIcon className={s.questionCard__dislike} />
                <LikeIcon className={s.questionCard__like} />
            </div>
            <QuestionsButtons title="Сохранить" />
        </div>
    )
}