import "./styles-spiner.scss";
import CloudIcon from "./assets/cloud-xmark-svgrepo-com.svg";
import CarSvg from "./assets/car.svg"

export const PreloaderCar = () => {

    return (
        <>
            <div className="loader">
                <div className="loader-wrapper">
                    <span className="clouds">
                        <span className="cloud-1"><CloudIcon /></span>
                        <span className="cloud-2"><CloudIcon /></span>
                    </span>
                    <CarSvg />
                    <span className="loading-text">Загрузка</span>
                </div>
            </div>
        </>
    )
}

