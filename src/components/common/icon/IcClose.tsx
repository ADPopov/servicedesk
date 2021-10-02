import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';

export const Svg = styled(Icon)` 
  width: 18px; 
  height: 18px;
`

export const IcClose: FC = () => {
    return (
        <Svg viewBox="0 0 18 18">
            <path d="M17.707 17.0001C18.0976 16.6096 18.0976 15.9764 17.707 15.5859L11.1213 9.00012L17.7072 2.41421C18.0977 2.02369 18.0977 1.39052 17.7072 0.999998L17.0003 0.29309C16.6098 -0.0974337 15.9766 -0.0974338 15.5861 0.29309L9.00016 6.879L2.41426 0.293046C2.02373 -0.0974785 1.39057 -0.0974785 1.00005 0.293046L0.293138 0.999953C-0.0973868 1.39048 -0.0973871 2.02364 0.293137 2.41417L6.87905 9.00012L0.293501 15.5857C-0.0970228 15.9762 -0.0970225 16.6094 0.293502 16.9999L1.00041 17.7068C1.39093 18.0973 2.0241 18.0973 2.41462 17.7068L9.00016 11.1212L15.5859 17.707C15.9764 18.0975 16.6096 18.0975 17.0001 17.707L17.707 17.0001Z" fill="#121417"/>
        </Svg>
    );
};

export default IcClose;