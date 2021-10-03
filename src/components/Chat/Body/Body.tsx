import React from 'react';
import {
    MessagesContainer,
    MessagesContent,
    MessagesHistory,
    MessagesHistoryFlow,
    MessagesScrollable,
} from "./Body.styled";
import Messages from "./Message/Message";


const MessageContent = () => {

    return (
        <MessagesContainer>
            <MessagesContent>
                <MessagesHistory>
                    <MessagesScrollable>
                        <MessagesHistoryFlow>
                            <Messages />
                        </MessagesHistoryFlow>
                    </MessagesScrollable>
                </MessagesHistory>
            </MessagesContent>
        </MessagesContainer>
    );
};

export default MessageContent;