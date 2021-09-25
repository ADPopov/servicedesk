import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';

export const Svg = styled(Icon)` 
  width: 24px; 
  height: 24px;
  margin: 10px 18px;
`

export const FolderIcon: FC = () => {
    return (
        <Svg viewBox="0 0 21 20" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.895431 0 2V18C0 19.1046 0.895431 20 2 20H9C10.1046 20 11 19.1046 11 18V11H14V14.5005C14 14.9333 14.5126 15.1617 14.8344 14.8722L19.8368 10.3717C20.0576 10.173 20.0575 9.82683 19.8367 9.62821L14.8344 5.12922C14.5126 4.8398 14 5.06818 14 5.50098V9H11V2C11 0.895431 10.1046 0 9 0H2ZM11 9H5.5C5.22386 9 5 9.22386 5 9.5V10.5C5 10.7761 5.22386 11 5.5 11H11V9Z" fill="#4B4C4F"/>
        </Svg>

    );
};

export default FolderIcon;