import { ReactNode } from "react";

export type TProtectedRouteProps = {
    onlyOnAuth?: boolean;
    isRegister?: boolean;
    children: ReactNode;
}
