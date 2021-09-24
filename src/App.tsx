import React, {FC} from 'react';
import {Container} from "./components/styles/Container.styled";
import {Grid} from "./components/styles/Grid.styled";
import { NavMenu } from './components/Menu';
import { Header } from './components/Header';
import { Logotype } from './components/Logotype';

export const Content: FC = () => {
    return <div>
        Content
    </div>;
}

const App: FC = () => {
    return (
        <Container>
            <Grid templateColumns="184px 1fr" templateRows="96px calc(100vh - 224px)" gap="48px">
                <Logotype />
                <Header />
                <NavMenu />
                <Content />
            </Grid>
        </Container>
    );
}

export default App;
