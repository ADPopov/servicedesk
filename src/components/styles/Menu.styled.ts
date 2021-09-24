import styled from "styled-components";

interface MenuStyledProps {
    align?: string;
    justify?: string;
}


export const Menu = styled.div<MenuStyledProps>`
  display: flex;
  flex-direction: column;

  > * {
    &:last-child {
      display: flex;
      flex: 1;
      align-items: flex-end;
    }
    &:last-child :hover {
     
    }
  }
`