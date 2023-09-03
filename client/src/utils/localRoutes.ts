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
    comments: TComment[];
}

export type TComment = {
    id: number,
    content: string,
    rating: number,
    user: TUser
}

export type TLocalRoutes = TLocalRoute[];