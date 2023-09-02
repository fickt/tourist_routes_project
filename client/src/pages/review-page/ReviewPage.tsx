import React, {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Popup} from "ui/popup/Popup";
import imageBg from "./assets/map.png";

export const ReviewPage = () => {

    const {id} = useParams();
    const spotId = parseInt(id);
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const navigate = useNavigate();

    const closePopup = () => {
        setIsPopupOpen(false);
        navigate(`/spots/${id}`);
    };

    return (
        <div className={"wrapper"} style={{height: "100%", background: `url(${imageBg}) center/cover no-repeat`}}>
            <div className="overlay"/>
            <Popup
                review
                spotId={spotId}
                closePopup={closePopup}
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsPopupOpen}
            />
        </div>
    )
}