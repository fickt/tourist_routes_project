import CardList from "modules/card-list";
import s from "./styles.module.scss";

function SpotsPage() {

    return ( 
        <div className={s.wrapper}>
            <h2>Интересные места</h2>            
            <CardList />            
        </div>
     );
}

export default SpotsPage;