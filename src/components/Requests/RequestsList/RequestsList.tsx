import React from 'react';
import RequestCard from '../RequestCard/RequestCard';
import {Stack} from '../../common/styles/Stack.styled';


const RequestsList = () => {
    return (
        <Stack>
            <RequestCard state={'done'} />
            <RequestCard state={'inProgress'} />
            <RequestCard state={'canceled'} />
            <RequestCard state={'needsInfo'} />
            <RequestCard  />
            <RequestCard state={'inProgress'} />
            <RequestCard state={'inProgress'} />
        </Stack>
    );
};

export default RequestsList;