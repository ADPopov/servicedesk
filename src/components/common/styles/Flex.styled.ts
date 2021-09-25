import styled from "styled-components";

interface FlexStyledProps {
    align?: string;
    justify?: string;
}

export const Flex = styled.div<FlexStyledProps>`
  display: flex;
  `