import s from "./style.module.scss";
import { Button, Form } from "antd";
import { TFormButtonProps } from "./types";

export const FormButton = ({ value, onClick, form, loader }: TFormButtonProps) => {

    return (
        <Form.Item>
            <Button
                className={s.form__button}
                type="primary"
                htmlType="submit"
                onClick={onClick}
                disabled={loader === "true"
                    || !form.isFieldsTouched(true)
                    || form.getFieldsError()
                        .filter(({ errors }) => errors.length).length > 0
                }
            >
                {value}
            </Button>
        </Form.Item>
    )
}