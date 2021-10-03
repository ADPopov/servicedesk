import React, {FC} from 'react';
import {CheckIcon, MessageBody, MessageDate, MessageText} from "./MessageContent.styled";
import IcMessageCheck from "../../../../common/icon/IcCheckMessage";

export const MessageContent: FC<{messageText: string, time: string}> = ({messageText, time}) => {
    return (
        <MessageBody>
            <MessageText>{messageText}</MessageText>
            <MessageDate>{time}</MessageDate>
            <CheckIcon><IcMessageCheck/></CheckIcon>
        </MessageBody>
    );
};