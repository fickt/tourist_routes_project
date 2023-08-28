import { Link } from "react-router-dom";
import { TFormLinkProps } from "./types";
import { Button } from "ui/button/Button";
import classNames from "classnames";

export const FormLink = ({ link, textLink, onClick }: TFormLinkProps) => {
    return (
        <div className="buttons__wrapper">
            <Link className="buttons__link" to={link} onClick={onClick}>
                <Button extraClass={classNames("button", "button_white")}>
                    {textLink}
                </Button>
            </Link>
        </div>
    )
}