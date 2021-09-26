import React from 'react';
import {Grid} from "../components/common/styles/Grid.styled";
import styled from "styled-components";
import News from '../components/News/News';
import Requests from '../components/Requests/Requests';

const WrapperGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  grid-template-rows: calc(100vh - 224px);
  grid-gap: 48px;
  overflow: hidden;
`

const Main = () => {
    return (
        <WrapperGrid>
            <Requests />
            <News />
        </WrapperGrid>
    );
};

export default Main;