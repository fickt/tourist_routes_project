import { Logo } from "components/logo/Logo";
import s from "./styles.module.scss"
import cn from "classnames";
import { Menu } from "components/menu/Menu";

export const Header = () => {   
    
    return (
        <header className={s.wrapper}>
            <div className={cn("container", s.header)}>
                <Logo />
            </div>
        </header>
    );
}