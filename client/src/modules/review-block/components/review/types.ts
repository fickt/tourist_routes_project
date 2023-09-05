import {TUser} from "modules/auth-form";

export type TReviewProps = {
    id?: number,
    content: string,
    rating: number,
    user?: TUser,
    date?: Date,
}