export type TFormProps = {
    isRegister?: boolean,
    isSettings?: boolean,
}

export type TFormData = {
    nickname: string,
    email: string,
    password?: string,
    confirm?: string,
}