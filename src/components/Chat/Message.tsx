import styled from "styled-components";
import React from "react";


const LeftMessage = styled.div`
  display: table;
  max-width: 300px;
  background: #EAE8E9;
  font-weight: 400;
  font-size: 16px;
  border-radius: 0 16px 16px 16px;
  padding: 11px 12px 11px 16px;
  margin-bottom: 8px;
  color: #121417;
`

const RightMessage = styled.div`
  color: #F6F4F5;
  max-width: 300px;
  background: #657CDA;
  font-weight: 400;
  font-size: 16px;
  border-radius: 16px 16px 0 16px;
  padding: 11px 12px 11px 16px;
  margin-bottom: 8px;
  margin-right: 0;
  margin-left: auto;
  display: table;
`

 export const Message = () => {
    return (
        <>
            <LeftMessage >Здравствуйте, чем помочь?</LeftMessage>
            <RightMessage >Мне нужно подключить WebSocket к этому чату. Вы можете это сделать?</RightMessage>
            <LeftMessage >К сожалению нет... Это не в нашей компетенции</LeftMessage>
            <LeftMessage >Хотя,мы можем позвать к Вам нашего специалиста, Стаса.</LeftMessage>
            <RightMessage >Да, я буду благодарен!</RightMessage>
            <RightMessage >Можно я еще напишу несколько сообщений чтобы проверить что они изчезают сверху как положено?</RightMessage>
            <LeftMessage >Да, пожалуйста!</LeftMessage>
            <RightMessage >Спасибо, вы очень добры!</RightMessage>
            <LeftMessage >Нужно добавить имя и дату к сообщению....</LeftMessage>
            <RightMessage >Да, дейсвтвительно, но главное, что сообщения правильно позиционируются.</RightMessage>
            <LeftMessage >Это точно...</LeftMessage>
        </>
    );
}