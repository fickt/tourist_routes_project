import { Button, Form } from "antd";
import { TFormButtonProps } from "./types";

export const FormButton = ({ value, onClick, loader }: TFormButtonProps) => {

    return (
        <Form.Item className="custom__antd__item">
            <Button
                className="form__button"
                type="primary"
                htmlType="submit"
                onClick={onClick}
                disabled={loader}
            >
                {value}
            </Button>
        </Form.Item>
    )
}