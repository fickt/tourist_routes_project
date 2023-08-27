export type TFormProps = {
    isAuthForm?: boolean,
    isRegister?: boolean,
    isInfoChange?: boolean,
    isPasswordChange?: boolean,
}

export type TFormData = {
    nickname?: string,
    email?: string,
    password_old?: string,
    password?: string,
    confirm?: string,
}