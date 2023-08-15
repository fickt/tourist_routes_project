import React from "react";
import s from "./style.module.scss";
import { Form, Input } from "antd";
import { TFormInputProps } from "./types";

export const FormInput = ({ name, rules, placeholder }: TFormInputProps) => {

    return (
        <Form.Item name={name} rules={rules} hasFeedback>
            <Input placeholder={placeholder} className={s.form__input} />
        </Form.Item>
    )
}