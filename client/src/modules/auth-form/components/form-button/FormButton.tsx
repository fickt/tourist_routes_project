import s from "./style.module.scss";
import { Button, Form } from "antd";
import { TFormButtonProps } from "./types";

export const FormButton = ({ value, onClick, disabled }: TFormButtonProps) => {

    return (
        <Form.Item>
            <Button
                className={s.form__button}
                type="primary"
                htmlType="submit"
                onClick={onClick}
                disabled={disabled}
            >
                {value}
            </Button>
        </Form.Item>
    )
}