import s from "./styles.module.scss"
import SpruceIcon from "./images/spruce-icon.svg";
import TreeIcon from "./images/tree-icon.svg";
import {page404} from "components/not-found/constants/constants";
import {Button} from "ui/button/Button";
import classNames from "classnames";
import {useAppSelector} from "storage/hookTypes";
import {isLoader} from "components/loader-error";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";

export const NotFound = () => {
    const navigate = useNavigate();
    const loader = useAppSelector(isLoader);
    const navigateHome = () => navigate(RoutePath.home);

    return (
        <div className={s.notFound}>
            <div className={s.notFound__images}>
                <TreeIcon/>
                <SpruceIcon/>
            </div>
            <h1 className={s.notFound__title}>{page404.title}</h1>
            <p className={s.notFound__text}>{page404.text}</p>
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button extraClass={classNames("button", "button_green")} action={navigateHome} disabled={loader}>
                        {page404.buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
};