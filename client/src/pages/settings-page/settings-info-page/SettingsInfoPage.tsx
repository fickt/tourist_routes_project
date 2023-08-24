import { FormElem } from "ui/form-elem/components/form-elem/FormElem";
import s from "./styles.module.scss";
import { ContentHeader } from "ui/content-header/ContentHeader";

export const SettingsInfoPage = () => {

    return (
        <div className={s.wrapper}>
            <ContentHeader />
            <FormElem isSettings={true} />
        </div>
    )
}