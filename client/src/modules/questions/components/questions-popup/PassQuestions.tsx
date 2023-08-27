import s from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "ui/button/Button";
import { RoutePath } from "pages/routeConfig";

export const PassQuestions = () => {

    const navigate = useNavigate();

    const redirectToQuestions = () => {
        navigate(RoutePath.questions);
    }

    return (
        <div className={s.passQuestions}>
            <p className={s.passQuestions__text}>Рекомендаций пока нет, для того чтобы они появились необходимо заполнить анкету.</p>
            <Button action={redirectToQuestions}>Анкета</Button>
        </div>
    )
}