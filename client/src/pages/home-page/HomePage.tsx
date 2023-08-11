import React from "react";
import s from "./styles.module.scss"
import { MainContent } from "components/main-content/MainContent";
import { Spinner } from "ui/spinner/Spinner";

const HomePage = () => {
 
    return (
        <div className={s.wrapper}>
            <MainContent />
        </div>
    );
}

export default HomePage; 