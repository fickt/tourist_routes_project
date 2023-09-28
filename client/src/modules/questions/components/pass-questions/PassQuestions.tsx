import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Button } from "ui/button/Button";
import { RoutePath } from "pages/routeConfig";
import classNames from "classnames";

export const PassQuestions = () => {

    return (
        <div className={s.passQuestions}>
            <p className={s.passQuestions__title}>Рекомендации</p>
            <div className={s.passQuestions__wrapper}>
                <p className={s.passQuestions__text}>Рекомендаций пока нет, для того чтобы они появились необходимо заполнить анкету.</p>
                <div className="buttons__wrapper">
                    <Link to={RoutePath.questions} className="buttons__link">
                        <Button extraClass={classNames("button", "button_green")}>Анкета</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}