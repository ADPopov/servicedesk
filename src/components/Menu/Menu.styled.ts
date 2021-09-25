import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {TextWithIconWrapper} from "../common/TextWithIcon/TextWithIcon";

export const Menu = styled.aside`
  display: flex;
`

export const MenuItems = styled.ul`
  width: 100%;
  padding: 0;
`

export const Link = styled(NavLink)<{ activeClassName: string }>`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  color: #6F6F72;
  border-radius: 12px;
  text-decoration: none;
  margin-bottom: 10px;

  svg {
    margin: 10px 18px;
  }

  :hover {
    color: #3454D1;
    background: #C6CCEC;
  }

  &.${props => props.activeClassName} {
    color: #3454D1;
    background: #C6CCEC;

    ${TextWithIconWrapper} {
      font-weight: 600;
    }
  }
`;