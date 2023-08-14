import React, { MouseEvent } from "react";
import s from "./style.module.scss";
import { Button, Form } from "antd";
import { FormButtonProps } from "modules/auth-form/components/form-button/types";

export const FormButton = ({ value, onClick, disabled }: FormButtonProps) => {

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