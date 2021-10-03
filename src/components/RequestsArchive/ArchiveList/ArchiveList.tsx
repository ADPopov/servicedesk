import React, {useState} from 'react';
import {Stack} from '../../common/styles/Stack.styled';
import ArchiveCard from "../ArchiveCard/ArchiveCard";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {Ticket} from "../../../models/Ticket";

const ArchiveList = () => {
    const {archive} = useTypeSelector(state => state.archiveReducer);

    return (
        <Stack>
            {archive ? archive.map(t => <ArchiveCard key={t.id} ticket={t}/>) : null}
        </Stack>
    );
};

export default ArchiveList;