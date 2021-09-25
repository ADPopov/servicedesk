import styled from "styled-components";

interface BoxProps {
    bg?: string;
    borderRadius?: string;
    margin?: string;
    marginTop?: string;
    marginLeft?: string;
    marginRight?: string;
    marginBottom?: string;
    padding?: string
}

export const Box = styled.div<BoxProps>`
  background-color: ${({bg}) => bg};
  border-radius: ${({borderRadius}) => borderRadius};
  margin: ${({margin}) => margin};
  margin-left: ${({marginLeft}) => marginLeft};
  margin-right: ${({marginRight}) => marginRight};
  margin-top: ${({marginTop}) => marginTop};
  margin-bottom: ${({marginBottom}) => marginBottom};
  padding: ${({padding}) => padding};
`

