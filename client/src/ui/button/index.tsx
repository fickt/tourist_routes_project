import { Button as ButtonAntd } from "antd";
import { TButtonProps } from "./types";
import { MouseEvent } from "react";

const Button = ({children, type, target, href, action}:TButtonProps) => {

    const onclick = (e: MouseEvent<HTMLAnchorElement>) => {
        href && e.preventDefault();
        action && action();
    }

    return (
        <ButtonAntd href={href} target={target} type={type} onClick={onclick}>{children}</ButtonAntd>
    )
}

export default Button;