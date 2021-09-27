import React from 'react';
import styled from "styled-components";
import {H1} from "../../common/styles/typography/Headline.styled";
import {Flex} from "../../common/styles/Flex.styled";
import {P3} from "../../common/styles/typography/Paragraph.styled";
import {Card} from "../../common/styles/Card.styled";

interface ArchiveCardItemProps {
    color?: string
}

export const ArchiveCardItem = styled(Card)<ArchiveCardItemProps>`
  background-color: ${({color}) => color || "rgba(196, 194, 196, 0.15)"};
  margin-right: 24px;
  padding: 24px;
`

const RequestTop = styled(P3)`
  margin-bottom: 24px;
  color: #C4C2C4;
`

const RequestTitle = styled(H1)`
  margin-bottom: 8px;
  color: #121417;
`

const RequestBottom = styled(Flex)`
  color: #6F6F72;
  
`

const RequestType = styled(P3)``

const CompletionInfo = styled(P3)`
  margin-right: 0;
  margin-left: auto;
`


const ArchiveCard = () => {
    return (
        <ArchiveCardItem>
            <RequestTop>№ 159753 — 15.02.2021 12:19 </RequestTop>
            <RequestTitle>Чистка франкойлов</RequestTitle>
            <RequestBottom>
                <RequestType>Вентилляция</RequestType>
                <CompletionInfo>Выполнил: Александр Лобушкин — 17.02.2021 12:41</CompletionInfo>
            </RequestBottom>
        </ArchiveCardItem>
    );
};

export default ArchiveCard;