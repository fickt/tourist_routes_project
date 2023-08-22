import { ReactNode } from "react";

export type TProtectedRouteProps = {
    onlyOnAuth?: boolean;
    children: ReactNode;
}
