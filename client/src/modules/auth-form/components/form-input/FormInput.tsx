import React from "react";
import s from "./style.module.scss";
import { Form, Input } from "antd";

type Props = {
    name: string;
    rules: any[];
    placeholder: string;
}

export const FormInput = ({ name, rules, placeholder }: Props) => {

    return (
        <Form.Item name={name} rules={rules} hasFeedback>
            <Input
                placeholder={placeholder}
                className={s.form__input}
            />
        </Form.Item>
    )
}