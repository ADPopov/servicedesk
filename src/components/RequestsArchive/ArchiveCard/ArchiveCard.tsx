import React, {FC} from 'react';
import styled from "styled-components";
import {H1} from "../../common/styles/typography/Headline.styled";
import {Flex} from "../../common/styles/Flex.styled";
import {P3} from "../../common/styles/typography/Paragraph.styled";
import {Card} from "../../common/styles/Card.styled";
import {Ticket} from "../../../models/Ticket";
import moment from "moment";

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

interface ArchiveCardProps {
    ticket: Ticket
}

const ArchiveCard: FC<ArchiveCardProps> = ({ticket}) => {
    moment.locale('ru')
    const createdDate = moment(ticket.created).format("MM.DD.YYYY hh:mm");
    const modifiedDate = moment(ticket.modified).format("MM.DD.YYYY hh:mm")

    return (
        <ArchiveCardItem>
            <RequestTop>№ {ticket.id} — {createdDate} </RequestTop>
            <RequestTitle>{ticket.title}</RequestTitle>
            <RequestBottom>
                <RequestType>{ticket.ticketType.title}</RequestType>
                <CompletionInfo>Выполнил: {ticket.responsibleByUser.fullName} — {modifiedDate}</CompletionInfo>
            </RequestBottom>
        </ArchiveCardItem>
    );
};

export default ArchiveCard;