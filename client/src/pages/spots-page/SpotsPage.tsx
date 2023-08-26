import s from "./styles.module.scss";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { SpotRouteList } from "modules/card-list";

export const SpotsPage = () => {

    return (
        <div className={s.wrapper}>
            <ContentHeader title="Интересные места" />
            <SpotRouteList />
        </div>
    );
}