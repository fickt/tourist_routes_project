import React, { MouseEvent } from "react";
import s from "./style.module.scss";
import { Button, Form } from "antd";

type Props = {
    value: string;
    onClick: () => void;
    disabled: boolean;
}

export const FormButton = ({ value, onClick, disabled }: Props) => {

    return (
        <Form.Item>
            <Button
                className={s.form__button}
                type="primary"
                htmlType="submit"
                onClick={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault && onClick}
                disabled={disabled}
            >
                {value}
            </Button>
        </Form.Item>
    )
}