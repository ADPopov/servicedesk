import styled from "styled-components";

interface TextStyledProps {
    color?: string;
    fontWeight?: number;
    fontSize?: string
}

export const Text = styled.a<TextStyledProps>`
  display: block;
  font-size: ${(props) => props.fontSize || '14px'};
  font-family: Gilroy;
  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => props.fontWeight || '400'};
`