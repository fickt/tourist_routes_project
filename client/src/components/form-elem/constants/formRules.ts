import {Rule} from "antd/lib/form";

export const nicknameRules: Rule[] = [
    {required: true, message: "Придумайте имя пользователя", whitespace: true},
    {min: 3, message: "Имя пользователя должно содержать не менее 3 символов"},
    {max: 10, message: "Имя пользователя не должно быть длиннее 10 символов"},
    {validator: (_, value) => {
        if (value && /^[?!@#$%^&*()+-]/.test(value)) {
            return Promise.reject("Никнейм не может начинаться со специальных символов: ?!@#$%^&*()+-");
        }
        return Promise.resolve();
    },}
];

export const emailRules: Rule[] = [
    {required: true, message: "Введите e-mail"},
    {type: "email", message: "Невалидный e-mail"},
    {validator: (_, value) => {
        if (value && value.length > 20) {
            return Promise.reject("E-mail не должен быть длиннее 20 символов");
        }
        return Promise.resolve();
    },},
];

export const passwordRules: Rule[] = [
    {required: true, message: "Введите пароль"},
    {whitespace: true, message: "Пароль не должен содержать пробелы"},
    {min: 3, message: "Пароль должен содержать не менее 3 символов"},
]