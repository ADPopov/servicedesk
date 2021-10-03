import styled from "styled-components";
import {H2} from "../../common/styles/typography/Headline.styled";
import IcClose from "../../common/icon/IcClose";
import React, {FC} from "react";

const ChatHeader = styled.header`
  display: flex;
  height: 48px;
  flex: 0 0 48px;
  align-items: center;
`
const Title = styled(H2)`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  color: #121417;
`
const CloseButton = styled.div`
  margin-right: 0;
  margin-left: auto;
  cursor: pointer;
`

interface HeaderParams {
    description: string,
    onClick: () => void;
}

export const Header: FC<HeaderParams> = ({description, onClick}) => {
    return <ChatHeader>
        <Title>{description}</Title>
        <CloseButton onClick={onClick}><IcClose/></CloseButton>
    </ChatHeader>;
}