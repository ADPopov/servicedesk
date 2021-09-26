import React from 'react';
import { CardHeader } from '../common/styles/Card.styled';
import { WhiteCard } from '../common/styles/WhiteCard.styles';
import styled from "styled-components";
import { H4 } from '../common/styles/typography/Headline.styled';

const Dropdown = styled.div`

`

const DropdownButton = styled(H4)`
  background: #3454D1;
  box-shadow: 0px 6px 12px -6px rgba(18, 20, 23, 0.12), 0px 8px 24px -4px rgba(18, 20, 23, 0.08);
  border-radius: 12px;
  width: 232px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px 12px 8px 16px;
  color: white;
`

const DropdownContent = styled.div`

`

const DropdownItem = styled.div`

`

const RequestsArchive = () => {
    return (
        <WhiteCard>
           <Dropdown>
               <DropdownButton>По дате появления</DropdownButton>
               <DropdownContent>
                   <DropdownItem>По дате появления</DropdownItem>
                   <DropdownItem>По статусу</DropdownItem>
                   <DropdownItem>По исполнителю</DropdownItem>
               </DropdownContent>
           </Dropdown>
        </WhiteCard>
    );
};

export default RequestsArchive;