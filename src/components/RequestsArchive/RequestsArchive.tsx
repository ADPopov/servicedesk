import React from 'react';
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import styled from "styled-components";
import { Flex } from '../common/styles/Flex.styled';
import Dropdown from "../common/Dropdown";
import Searchbox from "../common/Searchbox";
import ArchiveList from './ArchiveList/ArchiveList';

const Header = styled(Flex)`
  margin-bottom: 32px;
`

const RequestsArchive = () => {
    return (
        <WhiteCard>
            <Header>
                <Searchbox />
                <Dropdown />
            </Header>
            <ArchiveList />
        </WhiteCard >
    );
};

export default RequestsArchive;