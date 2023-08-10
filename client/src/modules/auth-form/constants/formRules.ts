export const nicknameRules = [
    {required: true, message: "Придумайте имя пользователя", whitespace: true},
    {min: 3, message: "Имя пользователя должно содержать не менее 3 символов!"}
];

export const emailRules = [
    {required: true, message: "Введите e-mail!"},
    {type: "email", message: "Невалидный e-mail"}
];

export const passwordRules = [
    {required: true, message: "Введите пароль!"},
    {whitespace: true, message: "Пароль не должен содержать пробелы!"},
    {min: 3, message: "Пароль должен содержать не менее 3 символов!"},
]