import React, {FC} from 'react';
import styled from "styled-components";
import {Flex} from "../styles/Flex.styled";

interface TextWithIconProps {
    icon?: JSX.Element;
    children?: string;
    gap?: string
}

interface ITextWithIconWrapperProps {
    gap?: string
}

export const TextWithIconWrapper = styled(Flex)<ITextWithIconWrapperProps>`
  align-items: center;
  height: 16px;
  gap: ${({gap}) => gap || '18px'};
`;



const TextWithIcon: FC<TextWithIconProps> = ({icon, gap, children}) => {
    return(
        <TextWithIconWrapper gap={gap}>
            {icon ? icon : null}
            {children}
        </TextWithIconWrapper>

    )
}

export default TextWithIcon;