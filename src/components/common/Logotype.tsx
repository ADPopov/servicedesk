import React, {FC} from 'react';
import {Flex} from "./styles/Flex.styled";
import Logo from "./Logo";

export const Logotype: FC = () => {
    return <Flex justify='left' align="center">
        <Logo/>
    </Flex>;
}