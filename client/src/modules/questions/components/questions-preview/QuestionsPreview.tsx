import s from "./styles.module.scss";
import { QuestionsButtons } from "modules/questions/components/questions-buttons/QuestionsButtons";

export const QuestionsPreview = () => {

    return (
        <>
            <p className={s.preview__text}>Для того чтобы сгенерировать персональные рекомендации, пройдите анкетирование.</p>
            <QuestionsButtons title="Пройти" />
        </>
    )
}