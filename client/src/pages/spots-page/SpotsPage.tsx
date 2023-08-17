import s from "./styles.module.scss";
import { ContentHeader } from "ui/content-header/ContentHeader";
import { SpotRouteList } from "modules/card-list";

const SpotsPage = () => {

    return (
        <div className={s.wrapper}>
            <ContentHeader textButton="назад" title="Интересные места" />
            <SpotRouteList />
        </div>
    );
}

export default SpotsPage;