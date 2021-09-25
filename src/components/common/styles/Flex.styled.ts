import styled from "styled-components";

interface FlexStyledProps {
    align?: string;
    justify?: string;
}

export const Flex = styled.div<FlexStyledProps>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'left'};
`

export const FlexContainer = styled.div`
  display: flex;
`