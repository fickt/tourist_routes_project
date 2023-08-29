import s from "./styles.module.scss";

export const RememberMe = () => {

    return (
        <div className={s.remember}>
            <input type="checkbox" className={s.remember__checkbox} />
            <span className={s.remember__title}>Запомнить меня</span>
        </div>
    )
}