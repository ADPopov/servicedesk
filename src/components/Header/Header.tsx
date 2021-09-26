import React, {FC} from 'react';
import {Avatar} from "../common/styles/Avatar.styled";
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import styled from "styled-components";
import {P3} from '../common/styles/typography/Paragraph.styled';
import {H2} from '../common/styles/typography/Headline.styled';

const Wrapper = styled(WhiteCard)`
  display: flex;
  align-items: center;
`

const UserAvatar = styled(Avatar)`
  margin-right: 16px;
`

const Greetings = styled(P3)`
  margin-right: 16px;
  color: #6F6F72;;
`
const Username = styled(H2)`
  margin-right: 16px;
  color:  #121417
`

export const Header: FC = () => {
    return (
        <Wrapper>
            <UserAvatar
                src={"https://sun9-15.userapi.com/impg/qujaYOA67lxojKO2E9WaP6SiJEEwBwG3yQTy1w/BrYWWfq0Qlo.jpg?size=620x977&quality=96&sign=f2a313a8b84375fa58087efe545b7d70&type=album"}/>
            <div>
                <Greetings>Здравствуйте,</Greetings>
                <Username>Александр</Username>
            </div>
        </Wrapper>
    );
}
