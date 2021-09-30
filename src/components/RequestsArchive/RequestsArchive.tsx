import React, {FC} from 'react';
import {WhiteCard} from '../common/styles/WhiteCard.styles';
import styled from "styled-components";
import {Flex} from '../common/styles/Flex.styled';
import Searchbox from "../common/Searchbox";
import ArchiveList from './ArchiveList/ArchiveList';
import {Option} from "../common/SelectBox/Option";
import {Select} from "../common/SelectBox/Select";

const Header = styled(Flex)`
  margin-bottom: 32px;
`

const RequestsArchive: FC = () => {
    const options = [
        "По дате появления", "По алфавиту", "Еще по чему нибудь"
    ];


    const handleSelectChange = (data: string) => {
        console.log(data)
    }

    return (
        <WhiteCard>
            <Header>
                <Searchbox/>
                <Select defaultValue={options[0]} onChange={handleSelectChange}>
                    {options.map(option => (
                        <Option key={option} value={option}>
                            {option}
                        </Option>
                    ))}
                </Select>
            </Header>
            <ArchiveList/>
        </WhiteCard>
    );
};

export default RequestsArchive;