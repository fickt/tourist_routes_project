import { ReactNode } from "react"

export type TButtonProps = {
    href?: string,
    target?: string,
    children: ReactNode,
    type?: "text" | "link" | "ghost" | "default" | "primary" | "dashed",
    action?: () => void,
    extraClass?: string
}