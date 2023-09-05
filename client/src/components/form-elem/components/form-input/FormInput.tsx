import s from "./styles.module.scss";
import {Form, Input} from "antd";
import {TFormInputProps} from "./types";

export const FormInput = ({name, title, rules, placeholder}: TFormInputProps) => {

    return (
        <Form.Item className="custom__antd__item" name={name} rules={rules} validateStatus={""} hasFeedback>
            <div className={s.field}>
                <span className={s.field__title}>{title}</span>
                <Input placeholder={placeholder} className={s.field__input}/>
            </div>
        </Form.Item>
    )
}