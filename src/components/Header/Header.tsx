import React, {FC} from 'react';
import {Avatar} from "../common/styles/Avatar.styled";
import {Text} from "../common/styles/Text.styled";
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import styled from "styled-components";

const Wrapper = styled(WhiteCard)`
  display: flex;
  align-items: center;
`

const UserAvatar = styled(Avatar)`
  margin-right: 16px;
`

export const Header: FC = () => {
    return (
        <Wrapper>
            <UserAvatar
                src={"https://sun9-15.userapi.com/impg/qujaYOA67lxojKO2E9WaP6SiJEEwBwG3yQTy1w/BrYWWfq0Qlo.jpg?size=620x977&quality=96&sign=f2a313a8b84375fa58087efe545b7d70&type=album"}/>
            <div>
                <Text fontSize="14px" fontWeight={400} color="#6F6F72">Здравствуйте,</Text>
                <Text fontSize="20px" fontWeight={600} color="#121417">Александр</Text>
            </div>
        </Wrapper>
    );
}
