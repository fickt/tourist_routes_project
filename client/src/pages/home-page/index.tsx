
import s from "./styles.module.scss"
import YMapComponent from "components/ymap";
import { markers } from "components/ymap/markers";


function HomePage() {   
 
    return ( 
        <div className={s.wrapper}>
            <h2>Путешествуй и не парься</h2>
            <YMapComponent markers={markers}/>
       </div>
     );
}

export default HomePage; 