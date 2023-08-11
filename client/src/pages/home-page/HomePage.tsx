import React from "react";
import s from "./styles.module.scss"
import { MainContent } from "modules/main-content/MainContent";
import { Spinner } from "ui/spinner/Spinner";

const HomePage = () => {
 
    return (
        <div className={s.wrapper}>
            <MainContent />
            <Spinner />
        </div>
    );
}

export default HomePage; 