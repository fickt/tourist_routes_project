import s from "./styles.module.scss"
import { MainContent } from "modules/main-content/MainContent";

const HomePage = () => {
 
    return (
        <div className={s.wrapper}>
            <MainContent />
        </div>
    );
}

export default HomePage; 