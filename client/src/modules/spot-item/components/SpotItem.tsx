import s from "./styles.module.scss"
import { ReactNode } from "react"
import Button from "ui/button/Button"
import { ReviewBlock } from "modules/review-block"
import { YMapComponent } from "components/ymap/YMapComponent"
import { TMarker } from "components/ymap/constants/markers"

type props = {
    spotItem: TMarker[]
} & { children?: ReactNode }

export const SpotItem = ({ spotItem }: props) => {

    const { name, description, picture, id } = spotItem[0];

    return (
        <div className={s.wrapper}>
            <section className={s.section}>
                <img className={s.card__image} src={picture} alt={name} />
            </section>
            <section className={s.section}>
                <h2 className={s.section__title}>О Маршруте</h2>
                <div className={s.card__text_block}>
                    <div className={s.card__desc}>
                        <span>{description}</span>
                    </div>
                    <Button extraClass={s.button} type="primary">Лучшие отзывы</Button>
                </div>
            </section>
            <section className={s.section}>
                <h2 className={s.section__title}>На карте</h2>
                <YMapComponent markers={spotItem} />
            </section>
            <section className={s.section}>
                <h2 className={s.section__title}>Мнения пользователей</h2>
                <ReviewBlock id={id} />
            </section>

        </div>
    )
}