import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "storage/hook-types";
import s from './styles.module.scss'
import YMapComponent from "components/ymap";
import DGisMap from "components/2gis-map";
import DGisMapGL from "components/2gis-map-gl";
import { markers } from "components/ymap/markers";


function HomePage() {   
 
    return ( 
        <div className={s.wrapper}>
            <h2>Путешествуй и не парься</h2>
            <YMapComponent markers={markers}/>
            {/* <DGisMap /> */}
            {/* <DGisMapGL /> */}
       </div>
     );
}

export default HomePage; 