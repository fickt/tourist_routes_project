import { CardList } from "modules/card-list";
import s from "./styles.module.scss";
import { ContentHeader } from "ui/content-header/ContentHeader";

const SpotsPage = () => {

    return ( 
        <div className={s.wrapper}>
            <ContentHeader textButton="назад" title="Интересные места" />          
            <CardList />            
        </div>
     );
}

export default SpotsPage;