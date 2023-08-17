import s from "./styles.module.scss";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { SpotRouteList } from "modules/card-list";

export const SpotsPage = () => {

    return (
        <div className={s.wrapper}>
            <ContentHeader textButton="назад" title="Интересные места" />
            <SpotRouteList />
        </div>
    );
}