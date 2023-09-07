import {ReactNode} from "react";
import {TLocalRoute} from "utils/localRoutes";

export type TCardProps = TLocalRoute & {
    activeFavMark?: boolean,
    children?: ReactNode,
}