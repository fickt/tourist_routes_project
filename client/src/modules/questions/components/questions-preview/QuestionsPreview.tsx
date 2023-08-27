import s from "./styles.module.scss";
import { QuestionsButton } from "modules/questions/components/questions-buttons/QuestionsButton";

export const QuestionsPreview = () => {

    return (
        <>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите анкетирование.</p>
            <QuestionsButton title="Пройти" />
        </>
    )
}