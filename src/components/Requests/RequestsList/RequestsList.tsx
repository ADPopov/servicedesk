import React from 'react';
import RequestCard from '../RequestCard/RequestCard';
import {Stack} from '../../common/styles/Stack.styled';
import {useTypeSelector} from "../../../hooks/useTypeSelector";


const RequestsList = () => {

    const {tickets} = useTypeSelector(state => state.ticketReducer);

    return (
        <Stack>
            {[...tickets].reverse().map(t => <RequestCard key={t.id} status={t.ticketStatus.title} ticket={t}/>)}
        </Stack>
    );
};

export default RequestsList;