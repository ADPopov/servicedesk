import React from 'react';
import {MessageItem, MessageList, MessageWrapper } from '../Body.styled';
import {Author} from "./Author/Author";
import {MessageContent} from "./MessageContent/MessageContent";

const Messages = () => {
    return (
        <MessageWrapper currentUser={false}>
            <MessageList>
                <MessageItem>
                    <Author/>
                    <MessageContent/>
                </MessageItem>
            </MessageList>
        </MessageWrapper>
    );
};

export default Messages;