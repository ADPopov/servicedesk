import React, {FC} from 'react';
import styled from "styled-components";
import { Icon } from '../styles/Icon.styled';
import {IconType} from "./type";

export const Svg = styled(Icon)`
  width: 20px;
  height: 16px;
`

export const DiUnion: FC<IconType> = ({className}) => {
    return (
        <Svg viewBox="0 0 20 16">
            <path d="M0 1C0 0.447715 0.447715 0 1 0H19C19.5523 0 20 0.447715 20 1V2C20 2.55228 19.5523 3 19 3H1C0.447716 3 0 2.55228 0 2V1Z" fill="#F6F4F5"/>
            <path d="M0 14C0 13.4477 0.447715 13 1 13H9C9.55228 13 10 13.4477 10 14V15C10 15.5523 9.55229 16 9 16H1C0.447716 16 0 15.5523 0 15V14Z" fill="#F6F4F5"/>
            <path d="M1 6.5C0.447715 6.5 0 6.94772 0 7.5V8.5C0 9.05228 0.447716 9.5 1 9.5H14C14.5523 9.5 15 9.05229 15 8.5V7.5C15 6.94772 14.5523 6.5 14 6.5H1Z" fill="#F6F4F5"/>
        </Svg>


    );
};

export default DiUnion;