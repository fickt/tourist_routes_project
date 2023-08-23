import { Button } from "ui/button/Button";
import { TQuestionsButtonProps } from "./types";
import s from "./styles.module.scss";

export const QuestionsButton = ({ title, redirect, action }: TQuestionsButtonProps) => {

    return (
        <div className={s.buttonsGroup}>
            <Button action={action}>{title}</Button>
            <Button action={redirect}>Позже</Button>
        </div>
    )
}