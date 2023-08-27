import { TUser } from "modules/auth-form";

export type TReviewProps = {
    id?: number,
    rating: number,
    content: string,
    user: TUser,
    created_at?: string,
    updated_at?: string
}