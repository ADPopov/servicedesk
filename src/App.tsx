import React, {FC, useEffect} from 'react';
import {MainContainer} from "./components/common/styles/Container.styled";
import {Grid} from "./components/common/styles/Grid.styled";
import {NavMenu} from './components/Menu/Menu';
import {Header} from './components/Header/Header';
import {Logotype} from './components/common/Logotype';
import styled from "styled-components";
import {Content} from './components/Content/Content';
import {useAction} from "./hooks/useAction";
import {Client} from '@stomp/stompjs';


const GridLayout = styled(Grid)`
  grid-template-columns: 184px 1fr;
  grid-template-rows: 96px calc(100vh - 224px);
  grid-gap: 48px;
`



const App: FC = () => {
    const {login} = useAction();

    useEffect(() => {
        login('user2', '321');
    })

    // const client = new Client({
    //     brokerURL: 'ws://140.82.32.146/ws2',
    //     connectHeaders: {
    //         Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzMyNDgzODUsInVzZXJfbmFtZSI6InVzZXIyIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9QT1dFUlVTRVIiXSwianRpIjoiYmFlNjQ1ZmEtZjI2ZC00OTRiLWFlMjUtOTFlZWY4YTk1MDMxIiwiY2xpZW50X2lkIjoiY2xpZW50Iiwic2NvcGUiOlsicmVhZCJdfQ.78sRhbfvrsDJmZry_e5nofbe2tPyCeUYeAah_Wl65_A"
    //     },
    //     debug: function (str) {
    //         console.log(str);
    //     },
    //     reconnectDelay: 5000,
    //     heartbeatIncoming: 10000,
    //     heartbeatOutgoing: 10000,
    // });
    //
    // client.onConnect = function (frame) {
    //     console.log(frame);
    //
    //     const subscription = client.subscribe('/user/queue/replies', (message) => {
    //         alert('got message with body ' + message);
    //         if (message) {
    //             alert('got message with body ' + message);
    //         } else {
    //             alert('got empty message');
    //         }
    //     });
    //
    //     const queue = {
    //         "chatId": 1,
    //         "messageType": 1,
    //         "content": "Hello",
    //         "ticketId": 59
    //     }
    //
    //     console.log(JSON.stringify(queue))
    //
    //     client.publish({
    //         destination: ' /app/chat/organization/59',
    //         body: JSON.stringify(queue),
    //         headers: {
    //             "content-type": "application/json"
    //         }
    //     });
    // };
    //
    // client.activate();

    return (
        <MainContainer>
            <GridLayout>
                <div></div>
                <Header/>
                <NavMenu/>
                <Content/>
            </GridLayout>
        </MainContainer>
    );
}

export default App;