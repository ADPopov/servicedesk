import React from 'react';
import styled from "styled-components";
import {Icon} from "../styles/Icon.styled";

export const Svg = styled(Icon)` 
  width: 20px; 
  height: 20px;
  margin-right: 10px;
`

const SearchIcon = () => {
    return (
        <Svg viewBox="0 0 20 20" >
            <path fillRule="evenodd" clipRule="evenodd" d="M16 7.99991C16 9.66691 15.4901 11.2148 14.6178 12.4962L19.7072 17.5855C20.0977 17.9761 20.0977 18.6092 19.7072 18.9997L19.0001 19.7069C18.6095 20.0974 17.9764 20.0974 17.5858 19.7069L12.4966 14.6176C11.2151 15.49 9.66711 15.9999 8 15.9999C3.58172 15.9999 0 12.4182 0 7.99991C0 3.58163 3.58172 -9.15527e-05 8 -9.15527e-05C12.4183 -9.15527e-05 16 3.58163 16 7.99991ZM8 12.9999C10.7614 12.9999 13 10.7613 13 7.99991C13 5.23848 10.7614 2.99991 8 2.99991C5.23858 2.99991 3 5.23848 3 7.99991C3 10.7613 5.23858 12.9999 8 12.9999Z" fill="#6F6F72"/>
        </Svg>
    );
};

export default SearchIcon;