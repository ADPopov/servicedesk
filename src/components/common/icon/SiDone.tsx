import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';

export const Svg = styled(Icon)` 
  width: 32px; 
  height: 32px;
`

export const SiDone: FC = () => {
    return (
        <Svg viewBox="0 0 32 32">
            <path d="M37.9917 1.58237C37.2106 0.80132 35.9443 0.80132 35.1632 1.58237L13.3974 23.3482L4.82843 14.7792C4.04738 13.9981 2.78105 13.9981 2 14.7792L0.585787 16.1934C-0.195261 16.9744 -0.195263 18.2408 0.585785 19.0218L11.9818 30.4178C12.365 30.8011 12.8651 30.9963 13.3674 31.0034C13.8897 31.0116 14.4145 30.8164 14.813 30.4179L39.4059 5.82501C40.1869 5.04396 40.1869 3.77763 39.4059 2.99658L37.9917 1.58237Z" fill="#B1E48D"/>
        </Svg>
    );
};

export default SiDone;