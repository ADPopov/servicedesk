import React, {FC, useRef} from 'react';
import ReactDOM from "react-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {Ticket} from "../../models/Ticket";
import {Header} from "./Header/Header";
import {ChatModal, ChatWrapper} from "./Chat.styled";
import Body from './Body/Body';
import Footer from "./Footer/Footer";


const Chat: FC<{ open: boolean, onClose: () => void, ticket: Ticket }> = ({open, onClose, ticket}) => {
    const modalContainerRef = useRef(null);
    const clickOutsideHandler = () => onClose();
    useOnClickOutside(modalContainerRef, clickOutsideHandler);

    if (!open) return null

    return ReactDOM.createPortal(
        <ChatModal>
            <ChatWrapper ref={modalContainerRef}>
                <Header description={ticket.description} onClick={onClose}/>
                <Body/>
                <Footer/>
            </ChatWrapper>
        </ChatModal>, document.getElementById('modal')!
    )
};

export default Chat;