import React from 'react';
import RequestCard from '../RequestCard/RequestCard';
import { Stack } from '../../common/styles/Stack.styled';

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