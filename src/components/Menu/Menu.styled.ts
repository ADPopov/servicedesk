import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {TextWithIconWrapper} from "../common/TextWithIcon/TextWithIcon";
import {P2} from "../common/styles/typography/Paragraph.styled";

export const Menu = styled.aside`
  display: block;
  position: relative;
  margin-bottom: 36px;
`

export const MenuItems = styled.ul`
  width: 100%;
  padding: 0`

export const Link = styled(NavLink)<{ activeClassName: string }>`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  color: #6F6F72;
  border-radius: 12px;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 12px 18px;

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

export const MenuBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  
  > * {
    :first-child {
      margin-bottom: 40px;
    }
  }

`

export const VersionText = styled(P2)`
  color: #C4C2C4;
  padding-left: 16px;
`