import React, {FC, useRef} from 'react';
import styled from "styled-components";
import ReactDOM from "react-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {Ticket} from "../../models/Ticket";
import {Header} from "./Header";
import {SendMessageForm} from "./SendMessageForm";
import {Message} from "./Message";

const ChatModal = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChatWrapper = styled.div`
  box-shadow: 0 8px 22px -6px rgba(18, 20, 23, 0.12), 0px 14px 64px -4px rgba(18, 20, 23, 0.12);
  width: 480px;
  height: 680px;
  border-radius: 24px;
  padding: 32px;
  background-color: #F6F4F5;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 48px 1fr 48px;
`

const Fade = styled.div`
  position: absolute;
  height: 56px;
  z-index: 10;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #F6F4F5 0%, rgba(246, 244, 245, 0) 100%);
`

const MessagesContainer = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    width: 8px;
  }
`

const Messages = styled.div`
  position: absolute;
  bottom: 24px;
  height: 100%;
  width: inherit;
`

const MessageWrapper = styled.div`
  overflow: auto;
  width: 100%;
`


const Chat: FC<{ open: boolean, onClose: () => void, ticket: Ticket }> = ({open, onClose, ticket}) => {
    const modalContainerRef = useRef(null);
    const clickOutsideHandler = () => onClose();
    useOnClickOutside(modalContainerRef, clickOutsideHandler);

    if (!open) return null

    return ReactDOM.createPortal(
        <ChatModal>
            <ChatWrapper ref={modalContainerRef}>
                <Header description={ticket.description} onClick={onClose}/>
                <MessagesContainer>
                    <Fade/>
                    <Messages>
                        <MessageWrapper>
                            <Message />
                        </MessageWrapper>
                    </Messages>
                </MessagesContainer>
                <SendMessageForm/>
            </ChatWrapper>
        </ChatModal>, document.getElementById('modal')!)
};

export default Chat;