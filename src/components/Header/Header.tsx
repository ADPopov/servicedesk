import React, {FC} from 'react';
import {Box} from '../common/styles/Box.styled';
import {Flex} from "../common/styles/Flex.styled";
import {Avatar} from "../common/styles/Avatar.styled";
import {Text} from "../common/styles/Text.styled";

export const Header: FC = () => {
    return <Box bg={'#F6F4F5'} borderRadius={"24px"}>
        <Flex justify='left' align="center">
            <Box>
                <Avatar
                    src={"https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"}/>
            </Box>
            <Box>
                <Text fontSize="14px" fontWeight={400} color="#6F6F72">Здравствуйте,</Text>
                <Text fontSize="20px" fontWeight={600} color="#121417">Александр</Text>
            </Box>
        </Flex>
    </Box>;
}
