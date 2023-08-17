import s from "./styles.module.scss"
import { MainContent } from "modules/main-content/MainContent";

export const HomePage = () => {
 
    return (
        <div className={s.wrapper}>
            <MainContent />
        </div>
    );
}