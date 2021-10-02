import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';

export const Svg = styled(Icon)` 
  width: 22px; 
  height: 28px;
`

export const IcMessageSend: FC = () => {
    return (
        <Svg viewBox="0 0 22 28">
            <path d="M0.728659 12.2754C0.20796 11.7547 0.20796 10.9105 0.728659 10.3898L10.0573 1.06112C10.3177 0.800763 10.6589 0.670588 11.0002 0.670593C11.3414 0.670588 11.6826 0.800763 11.943 1.06112L21.2743 10.3925C21.795 10.9132 21.795 11.7574 21.2743 12.2781L20.3315 13.2209C19.8108 13.7416 18.9666 13.7416 18.4459 13.2209L13.0031 7.77807V26C13.0031 26.7364 12.4061 27.3334 11.6698 27.3334H10.3303C9.59394 27.3334 8.99699 26.7364 8.99699 26V7.77832L3.55709 13.2182C3.03639 13.7389 2.19217 13.7389 1.67147 13.2182L0.728659 12.2754Z" fill="#F6F4F5"/>
        </Svg>


    );
};

export default IcMessageSend;