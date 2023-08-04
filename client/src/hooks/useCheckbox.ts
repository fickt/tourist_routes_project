import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useState } from "react";

const useCheckbox = (index: number) => {

    const [value, setValue] = useState(index)

    return {
        value,
        onChange: (e: CheckboxChangeEvent) => {
            setValue(e.target.value)
        }
    }
}

export default useCheckbox;
