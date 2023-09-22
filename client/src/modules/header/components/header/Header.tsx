import { Logo } from "components/logo/Logo";
import s from "./styles.module.scss";

export const Header = () => {   
    
    return (
        <header className={s.wrapper}>
            <Logo/>
        </header>
    );
}