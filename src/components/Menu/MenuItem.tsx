import React, {FC} from 'react';
import {Link} from "./Menu.styled";
import TextWithIcon from "../common/TextWithIcon/TextWithIcon";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
`

interface MenuItemProps {
    to: string;
    icon?: JSX.Element;
    children: string;
    exact?: boolean

}

const MenuItem: FC<MenuItemProps> = (props) => {
    return (
        <Wrapper>
            <Link to={props.to} activeClassName={'active'} exact={props.exact}>
                <TextWithIcon icon={props.icon} gap={'18px'}>{props.children}</TextWithIcon>
            </Link>
        </Wrapper>
    );
};

export default MenuItem;