import {Button as ButtonAntd} from "antd";
import {TButtonProps} from "./types";
import {MouseEvent} from "react";
import classNames from "classnames";

export const Button = ({children, type, target, href, extraClass, htmlType, action, disabled}: TButtonProps) => {
    const onclick = (e: MouseEvent<HTMLAnchorElement>) => {
        href && e.preventDefault();
        action && action();
    }

    return (
        <ButtonAntd
            htmlType={htmlType}
            href={href}
            target={target}
            type={type}
            onClick={onclick}
            className={classNames({[extraClass]: !!extraClass})}
            disabled={disabled}
        >
            {children}
        </ButtonAntd>
    )
}