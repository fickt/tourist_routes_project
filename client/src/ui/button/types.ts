import { ReactNode } from "react";

export type TButtonProps = {
    href?: string,
    target?: string,
    children: ReactNode,
    type?: "text" | "link" | "default" | "primary" | "dashed",
    action?: () => void,
    extraClass?: string,
    htmlType?: "button" | "submit" | "reset"
}