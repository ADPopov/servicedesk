import React, {FC} from 'react';
import HomeIcon from "../common/icon/HomeIcon";
import {Menu, MenuBottom, MenuItems, VersionText} from './Menu.styled';
import MenuItem from "./MenuItem";
import {RouteNames} from '../../routes';
import FolderIcon from "../common/icon/FolderIcon";
import LogoutIcon from "../common/icon/LogoutIcon";


interface INavLinks {
    to: RouteNames;
    icon?: JSX.Element;
    exact?: boolean;
    text: string;
}

const navigateItems: INavLinks[] = [
    {
        to: RouteNames.MAIN,
        icon: <HomeIcon/>,
        exact: true,
        text: "Главная"
    },
    {
        to: RouteNames.ARCHIVE,
        icon: <FolderIcon/>,
        text: "Архив заявок"
    }
]

export const NavMenu: FC = () => {
    return (
        <Menu>
            <MenuItems>
                {navigateItems.map((item) => <MenuItem icon={item.icon} to={item.to} exact={item.exact}
                                                       key={item.to}>{item.text}</MenuItem>
                )}
            </MenuItems>
            <MenuBottom>
                <MenuItem icon={<LogoutIcon />} to={'/logout'}>Выйти</MenuItem>
                <VersionText>Версия 1.0.1</VersionText>
            </MenuBottom>
        </Menu>
    )
}
