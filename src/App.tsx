import React, {FC, useEffect} from 'react';
import {MainContainer} from "./components/common/styles/Container.styled";
import {Grid} from "./components/common/styles/Grid.styled";
import {NavMenu} from './components/Menu/Menu';
import {Header} from './components/Header/Header';
import {Logotype} from './components/common/Logotype';
import styled from "styled-components";
import {Content} from './components/Content/Content';
import {useAction} from "./hooks/useAction";

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

    return (
        <MainContainer>
            <GridLayout>
                <Logotype/>
                <Header/>
                <NavMenu/>
                <Content/>
            </GridLayout>
        </MainContainer>
    );
}

export default App;