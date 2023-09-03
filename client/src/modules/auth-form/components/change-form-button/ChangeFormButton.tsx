import {Link} from "react-router-dom";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import classNames from "classnames";

export const ChangeFormButton = () => {

    return (
        <div className="buttons__wrapper">
            <Link to={RoutePath.auth_register} className="buttons__link">
                <Button extraClass={classNames("button", "button_white")}>Зарегистрироваться</Button>
            </Link>
        </div>
    )
}