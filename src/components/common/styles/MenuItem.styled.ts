import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-family: Gilroy;
  font-size: 14px;
  line-height: 125%;
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)<{ activeClassName: string }>`
  display: flex;
  align-items: center;
  background: transparent;
  width: 100%;
  color: #6F6F72;
  border-radius: 12px;
  text-decoration: none;
  margin-bottom: 10px;

  :hover {
    color: #3454D1;
    background: #C6CCEC;
  }

  &.${props => props.activeClassName} {
    color: #3454D1;
    background: #C6CCEC;
    
    ${Label} {
      font-weight: 600;
    }
  }
`;
