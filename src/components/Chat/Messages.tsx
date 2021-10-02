import React from "react";
import styled from "styled-components";

const MessagesContainer = styled.div`
  width: inherit;
  position: relative;
  height: calc(100% - 48px - 32px - 24px);
`

const MessagesList = styled.div`
  overflow: auto;
  flex: auto;
`

export const Messages = () => {
    return (
        <MessagesContainer>
            <MessagesList>

            </MessagesList>
        </MessagesContainer>
    )
}