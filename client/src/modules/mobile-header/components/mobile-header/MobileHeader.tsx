import s from "./styles.module.scss"

export const MobileHeader = () => {

    return (
        <div className={s.container}>
            <nav className={s.mobile_menu}>
                <div className={s.menu__wrapper}>
                    <a href="#">Главная</a>
                    <a href="#">Поиск</a>
                    <a href="#">Избранное</a>
                    <a href="#">Профиль</a>
                </div>
            </nav>
        </div>
    )
}