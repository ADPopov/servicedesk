import styled from "styled-components";
import {IcMessageSend} from "../../common/icon/IcMessageSend";
import React from "react";

const MessageBottom = styled.div`
  height: 48px;
  display: flex;
  position: relative;
`
const MessageInput = styled.input`
  border-radius: 14px;
  width: 100%;
  outline: 0;
  border: 2px solid #C4C2C4;
  color: #121417;
  font-weight: 600;
  font-size: 14px;
  padding: 11px 12px 11px 16px;

  ::placeholder {
    font-size: 14px;
    color: #C4C2C4;
    font-weight: 400;
  }
`
const SendButton = styled.div`
  outline: 0;
  background: #3454D1;
  cursor: pointer;
  box-shadow: 0 6px 12px -6px rgba(18, 20, 23, 0.12), 0px 8px 24px -4px rgba(18, 20, 23, 0.08);
  border-radius: 14px;
  padding: 12px 16px;
  margin: 0 0 0 8px;
`

export const SendMessageForm = () => {
    return (
        <MessageBottom>
            <MessageInput placeholder={"Сообщение"}/>
            <SendButton>
                <IcMessageSend/>
            </SendButton>
        </MessageBottom>
    )
}