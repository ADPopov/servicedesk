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
        <Svg viewBox="0 0 20 16">
            <path fill="currentColor" d="M0 1.99982C0 0.895253 0.895431 -0.00017643 2 -0.00017643H8.76392C9.52147 -0.00017643 10.214 0.427835 10.5528 1.10541L11.4472 2.89432C11.786 3.5719 12.4785 3.99991 13.2361 3.99991H18C19.1046 3.99991 20 4.89534 20 5.99991V13.9999C20 15.1045 19.1046 15.9999 18 15.9999H2C0.895431 15.9999 0 15.1045 0 13.9999V1.99982Z"/>
        </Svg>

    );
};

export default FolderIcon;