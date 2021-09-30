import React, {FC} from 'react';
import {Avatar} from "../common/styles/Avatar.styled";
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import styled from "styled-components";
import {P3} from '../common/styles/typography/Paragraph.styled';
import {H2} from '../common/styles/typography/Headline.styled';
import {useTypeSelector} from "../../hooks/useTypeSelector";

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
    const {user} = useTypeSelector(store => store.userReducer);

    return (
        <Wrapper>
            <UserAvatar
                src={process.env.REACT_APP_BASE_URL + user.userImage}/>
            <div>
                <Greetings>Здравствуйте,</Greetings>
                <Username>{user.firstName}</Username>
            </div>
        </Wrapper>
    );
}
