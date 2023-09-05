import {useParams} from "react-router-dom";
import {Popup} from "ui/popup/Popup";
import imageBg from "./assets/map.png";

export const ReviewPage = () => {

    const {id} = useParams();
    const spotId = parseInt(id);

    return (
        <div className={"wrapper"} style={{ height: "100%", background: `url(${imageBg}) center/cover no-repeat` }}>
            <div className="overlay" />
            <Popup review spotId={spotId}/>
        </div>
    )
}