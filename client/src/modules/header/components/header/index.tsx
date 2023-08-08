import Logo from "components/logo";
import s from "./styles.module.scss"
import cn from "classnames";
import Menu from "components/menu";

export const Header = () => {   
    
    return (
        <header className={s.wrapper}>
            <div className={cn("container", s.header)}>
                <Logo />
                <Menu />
            </div>
        </header>
    );
}