import React, {FC} from 'react';
import SiProgress from "../../common/icon/SiProgress";
import SiNeedsInfo from "../../common/icon/SiNeedsInfo";
import SiDone from "../../common/icon/SiDone";
import SiCanceled from "../../common/icon/SiCanceled";
import {
    DateText,
    IndicateIcon,
    IndicatorState,
    Place,
    RequestHeader,
    RequestInfo,
    RequestItem
} from './RequestCard.styled';
import {Ticket} from "../../../models/Ticket";
import moment from "moment";
import 'moment/locale/ru'

interface RequestCardProps {
    status?: string;
    ticket: Ticket
}

type Title =
    'В работе'
    | 'Выполнена'
    | 'Отменена'
    | 'Распределение'
    | 'Назначена'
    | 'Приостановлена'
    | 'Отклонена'
    | 'Подтверждено'
    | 'Новая'

const requestIndicators = {
    'В работе': {
        indicateColor: '#FCB80E',
        indicateIcon: <SiProgress/>,
        cardColor: 'rgba(248, 229, 187, 0.2)'
    },
    'needsInfo': {
        indicateColor: '#3454D1',
        indicateIcon: <SiNeedsInfo/>,
        cardColor: 'rgba(198, 204, 236, 0.2)'

    },
    'Выполнена': {
        indicateColor: '#6BD425',
        indicateIcon: <SiDone/>,
        cardColor: 'rgba(211, 236, 193, 0.2)'

    },
    'Отменена': {
        indicateColor: '#F34213',
        indicateIcon: <SiCanceled/>,
        cardColor: 'rgba(245, 200, 189, 0.2)'

    },
    'Распределение': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },
    'Назначена': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },
    'Приостановлена': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },
    'Отклонена': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },
    'Подтверждено': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },
    'Новая': {
        indicateColor: '#6F6F72',
        indicateIcon: null,
        cardColor: 'rgba(196, 194, 196, 0.15)'

    },

}

const RequestCard: FC<RequestCardProps> = ({status, ticket}) => {

    const indicate = requestIndicators[status as Title ?? 'Назначена'];

    const handleClick = () => {
        console.log("hello")
    }
    console.log(ticket)

    moment.locale('ru')
    const date = moment(ticket.created).format("MM.DD.YYYY hh:mm")

    return (
        <RequestItem color={indicate.cardColor} onClick={handleClick}>
            <IndicatorState color={indicate.indicateColor}/>
            <div>
                <RequestHeader>{ticket.description}</RequestHeader>
                <RequestInfo>
                    <Place>{ticket.place.place}</Place>
                    <DateText>• {date}</DateText>
                </RequestInfo>
            </div>
            <IndicateIcon>
                {indicate.indicateIcon}
            </IndicateIcon>
        </RequestItem>
    );
};

export default RequestCard;