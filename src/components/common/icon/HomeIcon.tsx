import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';
import {IconType} from "./type";

export const Svg = styled(Icon)` 
  width: 24px; 
  height: 24px;
`



export const HomeIcon: FC<IconType> = ({className }) => {
    return (
        <Svg viewBox="0 0 24 24" className={className}>
            <path fill="currentColor"
                d="M11.2978 2.28195L2.15319 11.1405C1.8303 11.4532 2.05177 12 2.50134 12H5V20C5 21.1046 5.89543 22 7 22H9C9.55228 22 10 21.5523 10 21V17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V21C14 21.5523 14.4477 22 15 22H17C18.1046 22 19 21.1046 19 20V12H21.4987C21.9484 12 22.1698 11.4529 21.8466 11.1402L12.6899 2.2815C12.3018 1.90599 11.6856 1.90619 11.2978 2.28195Z" />
        </Svg>
    );
};

export default HomeIcon;