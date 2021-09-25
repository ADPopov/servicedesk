import React, {FC} from 'react';
import {Container} from "./components/common/styles/Container.styled";
import {Grid} from "./components/common/styles/Grid.styled";
import { NavMenu} from './components/Menu/Menu';
import { Header } from './components/Header/Header';
import { Logotype } from './components/common/Logotype';
import { Route, Switch } from 'react-router-dom';
import { privateRouters } from './routes';

export const Content: FC = () => {
    return <Switch>
        {privateRouters.map(route =>
            <Route path={route.path}
                   exact={route.exact}
                   component={route.component}
                   key={route.path}/>)}
    </Switch>;
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
