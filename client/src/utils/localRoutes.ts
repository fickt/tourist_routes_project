import {TUser} from "modules/auth-form";

export type TLocalRoute = {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    categories: string[];
    longitude: number;
    latitude: number;
    rating: number;
    photos: string[];
    comments: TReview[];
    target_audiences: string[],
}

export type TReview = {
    id?: number,
    content: string,
    rating: number,
    user?: TUser | null,
    date?: Date,
}

export type TLocalRoutes = TLocalRoute[];