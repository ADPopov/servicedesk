import React, {Component} from 'react';
import styled from "styled-components";
import {Icon} from "../styles/Icon.styled";

export const Svg = styled(Icon)`
  width: 12px;
  height: 9px;
`

class DiArrow extends Component {
    render() {
        return (
            <Svg viewBox="0 0 12 9">
                <path d="M11.322 0.666656H0.67797C0.104259 0.666656 -0.209149 1.35829 0.158132 1.81384L5.48016 8.41499C5.7507 8.75054 6.24931 8.75055 6.51984 8.41499L11.8419 1.81384C12.2091 1.35829 11.8957 0.666656 11.322 0.666656Z" fill="#F6F4F5"/>
            </Svg>

        );
    }
}

export default DiArrow;