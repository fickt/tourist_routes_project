import { ReactNode } from "react";
import { TLocalRoute } from "utils/localRoutes";

export type TSpotItemProps = {
    spotItem: TLocalRoute
} & { children?: ReactNode }