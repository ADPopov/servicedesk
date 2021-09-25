import React, {FC} from 'react';
import styled from "styled-components";
import {Flex} from "../styles/Flex.styled";

interface TextWithIconProps {
    icon?: JSX.Element;
    children?: string;
}

export const TextWithIconWrapper = styled(Flex)`
  align-items: center;
  font-family: Gilroy;
  font-weight: 400;
  
`;

const TextWithIcon: FC<TextWithIconProps> = ({icon, children}) => {
    return(
        <TextWithIconWrapper>
            {icon ? icon : null}
            {children}
        </TextWithIconWrapper>

    )
}

export default TextWithIcon;