import LocationIcon from "./assets/location-icon.svg";
import FavoriteIcon from "./assets/favorite-icon.svg";
import {Typography} from "antd";
import {TEmptyList} from "./types/types";
import s from "./styles.module.scss";

const {Title} = Typography;

export const EmptyList = ({text, fav}: TEmptyList) => {

    return (
        <div className={s.wrapper}>
            {fav ? <FavoriteIcon/> : <LocationIcon/>}
            <Title level={2}>{text}</Title>
        </div>
    )
}