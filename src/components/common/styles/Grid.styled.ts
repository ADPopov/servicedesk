import styled from "styled-components";

interface GridProps {
    templateRows?: string,
    templateColumns?: string,
    gap?: string
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.templateColumns};
  grid-template-rows: ${(props) => props.templateRows};
  grid-gap:  ${(props) => props.gap || '2px'};
`