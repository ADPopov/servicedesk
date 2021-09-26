import React, {FC} from 'react';
import SiProgress from "../../common/icon/SiProgress";
import SiNeedsInfo from "../../common/icon/SiNeedsInfo";
import SiDone from "../../common/icon/SiDone";
import SiCanceled from "../../common/icon/SiCanceled";
import {Date, IndicateIcon, IndicatorState, Place, RequestItem, RequestHeader, RequestInfo} from './RequestCard.styled';

interface RequestCardProps {
    state?: "inProgress" | "needsInfo" | "done" | "canceled" | null;
}

const RequestCard: FC<RequestCardProps> = ({state}) => {
    const RequestIndicators = {
        'inProgress': {
            IndicateColor: '#FCB80E',
            indicateIcon: <SiProgress/>,
            cardColor: 'rgba(248, 229, 187, 0.2)'
        },
        'needsInfo': {
            IndicateColor: '#3454D1',
            indicateIcon: <SiNeedsInfo/>,
            cardColor: 'rgba(198, 204, 236, 0.2)'

        },
        'done': {
            IndicateColor: '#6BD425',
            indicateIcon: <SiDone/>,
            cardColor: 'rgba(211, 236, 193, 0.2)'

        },
        'canceled': {
            IndicateColor: '#F34213',
            indicateIcon: <SiCanceled/>,
            cardColor: 'rgba(245, 200, 189, 0.2)'

        },
        'default': {
            IndicateColor: '#6F6F72',
            indicateIcon: null,
            cardColor: 'rgba(196, 194, 196, 0.15)'

        }
    }
    const {IndicateColor, indicateIcon, cardColor} = RequestIndicators[state ?? 'default']

    const handleClick = () => {
        console.log("hello")
    }

    return (
        <RequestItem color={cardColor} onClick={handleClick}>
            <IndicatorState color={IndicateColor}/>
            <div>
                <RequestHeader>Не работает вентиляция</RequestHeader>
                <RequestInfo>
                    <Place>Офис 2109</Place>
                    <Date>• 21.02.2021 12:19</Date>
                </RequestInfo>
            </div>
            <IndicateIcon>
                {indicateIcon}
            </IndicateIcon>
        </RequestItem>
    );
};

export default RequestCard;