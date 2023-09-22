import {Form} from "antd";
import {TFormButtonProps} from "./types";
import {Button} from "ui/button/Button";

export const FormButton = ({value, onClick, loader}: TFormButtonProps) => {

    return (
        <Form.Item className="custom__antd__item">
            <Button
                extraClass="form__button"
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