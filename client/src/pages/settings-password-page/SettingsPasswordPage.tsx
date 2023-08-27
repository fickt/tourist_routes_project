import { ContentHeader } from "ui/content-header/ContentHeader";
import { FormElem } from "ui/form-elem/components/form-elem/FormElem";

export const SettingsPasswordPage = () => {

    return (
        <div className="wrapper">
            <ContentHeader />
            <FormElem isPasswordChange={true} />
        </div>
    )
}