import {Carousel} from "antd";
import {SliderProps} from "./types";
import "./styles.scss";

export const Slider = ({photos, name}: SliderProps) => {

    return (
        <Carousel dotPosition="bottom">
            {photos.map((photo, index) =>
                <div key={index}>
                    <img src={photo} alt={name}/>
                </div>
            )}
        </Carousel>
    )
}