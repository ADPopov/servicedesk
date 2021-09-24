import React, {FC} from 'react';
import MenuItem from "./common/MenuItem";
import HomeIcon from "./icon/HomeIcon";
import FolderIcon from "./icon/FolderIcon";
import { Menu } from './styles/Menu.styled';
import { Box } from './styles/Box.styled';

export const NavMenu: FC = () => {
    return <Menu>
        <MenuItem exact leftIcon={<HomeIcon/>} to={"/"}>Главная</MenuItem>
        <MenuItem leftIcon={<FolderIcon/>} to={"/archive"}>Архив заявок</MenuItem>
        <Box>
            <MenuItem leftIcon={<FolderIcon/>} to={"/logout"}>Выйти</MenuItem>
        </Box>
    </Menu>;
}