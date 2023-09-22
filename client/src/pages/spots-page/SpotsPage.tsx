import s from "./styles.module.scss";
import {ContentHeader} from "ui/content-header/ContentHeader";
import {CardList} from "modules/card-list";
import {useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";

export const SpotsPage = () => {
    const spots = useAppSelector(spotsSelector);

    return (
        <div className={s.wrapper}>
            <ContentHeader title="Интересные места"/>
            <CardList spots={spots}/>
        </div>
    );
}