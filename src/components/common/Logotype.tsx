import React, {FC} from 'react';
import {Flex} from "./styles/Flex.styled";
import Logo from "./Logo";
import styled from "styled-components";

const FlexWrapper = styled(Flex)`
  align-items: center;
`

export const Logotype: FC = () => {
    return <FlexWrapper><Logo/></FlexWrapper>;
}