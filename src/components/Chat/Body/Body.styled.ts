import styled from "styled-components";
import {MessageAuthor} from "./Message/Author/Author.styled";
import {MessageBody, MessageDate, MessageText} from "./Message/MessageContent/MessageContent.styled";


export const MessageWrapper = styled.section<{ currentUser: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: ${props => (props.currentUser ? 'flex-end' : 'flex-start')};
  flex-shrink: 0;

  & + & {
    margin-top: 8px;
  }

  ${(props) =>
          props.currentUser && `
          ${MessageList} {
    align-items: flex-end;
  }

  ${MessageItem} {
    background: #657CDA;
    color: #F6F4F5;
    border-radius: 16px 16px 0px 16px;

    ${MessageAuthor} {
      display: none;
    }
  }

  ${MessageText} {
    align-items: flex-end;
    color: #F6F4F5;
  } 
  
  ${MessageBody} {
    color: #F6F4F5;
    
    ${MessageDate} {
    color: #DDDBDC;
  }
  }
  `
  };
`


export const MessageList = styled.div`
  flex: 0 1 auto;
  display: flex;
  max-width: 300px;
  flex-direction: column;
  align-items: flex-start;
`


export const MessageItem = styled.div`
  position: relative;
  background: #EAE8E9;
  border-radius: 0 16px 16px 16px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  max-width: 100%;
  padding: 11px 12px 11px 16px;

  & + & {
    margin-top: 8px;

    ${MessageAuthor} {
      display: none;
    }
  }

`

export const MessagesContainer = styled.div`
  position: relative;
  overflow: auto;
  width: 100%;
  flex: 1 1 auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
`

export const MessagesContent = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const MessagesHistory = styled.div`
  height: 100%;
  display: flex;
  min-height: 0;
`
export const MessagesHistoryFlow = styled.div`
  margin-top: auto;
  padding-bottom: 24px;
  padding-top: 72px;
`

export const MessagesScrollable = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 20px;
  overscroll-behavior: none;
`

