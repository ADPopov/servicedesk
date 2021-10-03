import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from '../styles/Icon.styled';

export const Svg = styled(Icon)`
  width: 10px;
  height: 8px;
`

export const IcMessageCheck: FC = () => {
    return (
        <Svg viewBox="0 0 10 8">
            <path
                d="M9.49792 0.395531C9.30266 0.200269 8.98607 0.200269 8.79081 0.395531L3.34936 5.83699L1.20711 3.69473C1.01184 3.49947 0.695262 3.49947 0.5 3.69473L0.146447 4.04829C-0.0488153 4.24355 -0.0488157 4.56013 0.146446 4.75539L2.99545 7.60439C3.09126 7.70021 3.21629 7.74901 3.34185 7.75079C3.47242 7.75283 3.60363 7.70403 3.70326 7.60441L9.85147 1.45619C10.0467 1.26093 10.0467 0.944347 9.85147 0.749084L9.49792 0.395531Z"
                fill="#C4C2C4"/>
        </Svg>
    );
};

export default IcMessageCheck;