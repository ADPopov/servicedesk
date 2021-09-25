import React from 'react';
import {Grid} from "../components/common/styles/Grid.styled";
import styled from "styled-components";
import RequestsArchive from "../components/RequestsArchive/RequestsArchive";

const GridWrapped = styled(Grid)`
  grid-template-columns: 1fr;
  grid-template-rows: calc(100vh - 224px);
  grid-gap: 48px;
`

const Archive = () => {
    return (
        <GridWrapped>
            <RequestsArchive />
        </GridWrapped>
    );
};

export default Archive;