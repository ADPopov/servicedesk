import React from 'react';
import {
    MessagesContainer,
    MessagesContent,
    MessagesHistory,
    MessagesHistoryFlow,
    MessagesScrollable,
} from "./Body.styled";
import MessageItem from "./Message/Message";


const MessageContent = () => {

    return (
        <MessagesContainer>
            <MessagesContent>
                <MessagesHistory>
                    <MessagesScrollable>
                        <MessagesHistoryFlow>
                            <MessageItem currentUser={true} messages={["Добрый день! В офисе 356 не работает розетка! Что делать?"]} time={"12:35"}/>
                            <MessageItem currentUser={false} messages={["Добрый день! Вызвала электрика.", "Специалист придет в течение 15 минут."]} time={"12:37"}/>
                            <MessageItem currentUser={true} messages={["Спасибо!"]} time={"12:40"}/>
                        </MessagesHistoryFlow>
                    </MessagesScrollable>
                </MessagesHistory>
            </MessagesContent>
        </MessagesContainer>
    );
};

export default MessageContent;