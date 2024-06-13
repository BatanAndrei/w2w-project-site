import * as Yup from "yup";
import parse from "date-fns/parse";

//const phoneRegExp = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?/;
const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

export const signUpCreateSchema = Yup.object({
    phoneNumber: Yup
        .string()
        .required("Поле обязательное!")
        .matches(phoneRegExp, 'Длина или формат телефона не правильный!'),
    email: Yup
        .string()
        .email("В поле должен быть email!")
        .required("Поле обязательное!"),
    password: Yup
        .string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
});

export const signInSchema = Yup.object({
    phoneNumberOrEmail: Yup
        .string()
        .required("Поле обязательное!"),
    password: Yup
        .string()
        .required("Поле обязательное!")
        .min(3, "Пароль - минимум 3 символа!")
        .max(120, "максимальная длина - 120 символов!"),
});

export const questionnireSchema = Yup.object({
    birthDate: Yup
    .string()
    .required("Поле обязательное!"),
    jobTitle: Yup
    .string()
    .required("Поле обязательное!"),
    nikTelegrem: Yup
    .string()
    .required("Поле обязательное!"),
    nikInstagram: Yup
    .string()
    .required("Поле обязательное!"),
});

