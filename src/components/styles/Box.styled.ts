import styled from "styled-components";

interface BoxProps {
    bg?: string;
    borderRadius?: string
}

export const Box = styled.div<BoxProps>`
  background-color: ${({bg}) => bg};
  border-radius: ${({borderRadius}) => borderRadius};
`

