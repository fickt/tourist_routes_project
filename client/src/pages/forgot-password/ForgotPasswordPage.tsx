import s from "./style.module.scss";
import { PreloaderCar } from "ui/spinner/PreloaderCar";

const ForgotPasswordPage = () => {

    return (
        <div className={s.wrapper}>
            <PreloaderCar />
            <h2>Упс, тут пока ничего нет :(</h2>
        </div>
    );
}

export default ForgotPasswordPage;