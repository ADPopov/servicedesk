import React from 'react';
import { Stack } from '../../common/styles/Stack.styled';
import ArchiveCard from "../ArchiveCard/ArchiveCard";

const ArchiveList = () => {
    return (
        <Stack>
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
            <ArchiveCard />
        </Stack>
    );
};

export default ArchiveList;