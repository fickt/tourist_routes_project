import { FormElem } from "ui/form-elem/components/form-elem/FormElem";
import { ContentHeader } from "ui/content-header/ContentHeader";

export const SettingsInfoPage = () => {

    return (
        <div className="wrapper">
            <ContentHeader />
            <FormElem isInfoChange={true} />
        </div>
    )
}