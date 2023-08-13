import s from "./styles.module.scss"
import { MainContent } from "components/main-content/MainContent";

const HomePage = () => {
 
    return (
        <div className={s.wrapper}>
            <MainContent />
        </div>
    );
}

export default HomePage; 