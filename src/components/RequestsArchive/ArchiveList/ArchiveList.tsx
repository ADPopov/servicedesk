import React from 'react';
import {Stack} from '../../common/styles/Stack.styled';
import ArchiveCard from "../ArchiveCard/ArchiveCard";
import {useTypeSelector} from "../../../hooks/useTypeSelector";

const ArchiveList = () => {

    const {archive} = useTypeSelector(state => state.archiveReducer);

    return (
        <Stack>
            {archive ? archive.map(t => <ArchiveCard ticket={t}/>) : null}
        </Stack>
    );
};

export default ArchiveList;