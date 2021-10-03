import styled from "styled-components";
import {MessageWrapper} from "./Body/Body.styled";

export const ChatModal = styled.div`
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
export const ChatWrapper = styled.main`
  width: 480px;
  height: 680px;
  box-shadow: 0 8px 22px -6px rgba(18, 20, 23, 0.12), 0px 14px 64px -4px rgba(18, 20, 23, 0.12);
  border-radius: 24px;
  padding: 32px;
  background-color: #F6F4F5;
  display: flex;
  flex-direction: column;
`
const Fade = styled.div`
  position: absolute;
  height: 56px;
  z-index: 10;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, #F6F4F5 0%, rgba(246, 244, 245, 0) 100%);
`

const LeftMessage = styled(MessageWrapper)`
  max-width: 300px;
  background: #EAE8E9;
  font-weight: 400;
  font-size: 16px;
  border-radius: 0 16px 16px 16px;
  padding: 11px 12px 11px 16px;
  margin-bottom: 8px;
  color: #121417;
`
const RightMessage = styled(MessageWrapper)`
  color: #F6F4F5;
  max-width: 300px;
  background: #657CDA;
  font-weight: 400;
  font-size: 16px;
  border-radius: 16px 16px 0 16px;
  padding: 11px 12px 11px 16px;
  margin-bottom: 8px;
  justify-content: flex-end;
`




