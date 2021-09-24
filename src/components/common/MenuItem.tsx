import React, {FC} from 'react';
import {Label, Link } from '../styles/MenuItem.style';


interface MenuItemProps {
    children?: string
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    to: string,
    exact?: boolean
}


export const MenuItem: FC<MenuItemProps> = ({leftIcon, rightIcon, children, to}) => {
    return (
        <Link to={to} activeClassName={"active"} exact>
            {leftIcon ? leftIcon : null}
            <Label>{children}</Label>
            {rightIcon ? rightIcon : null}
        </Link>
    );
};

export default MenuItem;