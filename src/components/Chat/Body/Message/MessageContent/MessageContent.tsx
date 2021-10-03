import React from 'react';
import {CheckIcon, MessageBody, MessageDate, MessageText} from "./MessageContent.styled";
import IcMessageCheck from "../../../../common/icon/IcCheckMessage";

export const MessageContent = () => {
    return (
        <MessageBody>
            <MessageText>Создавайте новую заявку, в категории
                “Электрика”</MessageText>
            <MessageDate>12:12</MessageDate>
            <CheckIcon><IcMessageCheck/></CheckIcon>
        </MessageBody>
    );
};