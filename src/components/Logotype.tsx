import React, {FC} from 'react';
import {Flex} from "./styles/Flex.styled";
import Logo from "./common/Logo";

export const Logotype: FC = () => {
    return <Flex justify='left' align="center">
        <Logo/>
    </Flex>;
}