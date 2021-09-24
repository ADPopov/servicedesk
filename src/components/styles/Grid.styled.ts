import styled from "styled-components";

interface GridProps {
    templateRows: string,
    templateColumns: string,
    gap?: string
}

interface GridItemProps {
    colStart?: number | null,
    colEnd?: number | null,
    rowStart?: number | null,
    rowEnd?: number | null,
}

export const Grid = styled.div<GridProps>`
  display: grid;
  height: 200px;
  grid-auto-rows: 100px;
  grid-template-columns: ${(props) => props.templateColumns};
  grid-template-rows: ${(props) => props.templateRows};
  grid-gap:  ${(props) => props.gap || '2px'};
`

export const GridItem = styled.div<GridItemProps>`
  grid-column-start: ${(props) => props.colStart || null};
  grid-column-end: ${(props) => props.colEnd || null};
  grid-row-start: ${(props) => props.rowStart || null};
  grid-row-end: ${(props) => props.rowEnd || null};
`