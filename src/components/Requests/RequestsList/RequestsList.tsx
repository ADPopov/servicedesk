import React from 'react';
import RequestCard from '../RequestCard/RequestCard';
import styled from "styled-components";

const Stack = styled.div`
  overflow: auto;
  height: 90%;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #EAE8E9;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C4C2C4;
    border-radius: 4px;
  }
`

const RequestsList = () => {
    return (
        <Stack>
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
            <RequestCard />
        </Stack>
    );
};

export default RequestsList;