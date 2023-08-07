
import s from "./styles.module.scss"
import YMapComponent from "modules/ymap/components/ymap-component/ymap-component";
import { markers } from "modules/ymap/constants/markers";


function HomePage() {   
 
    return ( 
        <div className={s.wrapper}>
            <h2>Путешествуй и не парься</h2>
            <YMapComponent markers={markers}/>
       </div>
     );
}

export default HomePage; 