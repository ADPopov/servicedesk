import React, { FC } from 'react';
import {MessageItem, MessageList, MessageWrapper } from '../Body.styled';
import {Author} from "./Author/Author";
import {MessageContent} from "./MessageContent/MessageContent";

const Messages: FC<{currentUser: boolean, time: string, messages: string[]}> = ({currentUser, time, messages}) => {
    return (
        <MessageWrapper currentUser={currentUser}>
            <MessageList>
                {messages.map(m => <MessageItem>
                    <Author/>
                    <MessageContent time={time} messageText={m}/>
                </MessageItem>)}
            </MessageList>
        </MessageWrapper>
    );
};

export default Messages;