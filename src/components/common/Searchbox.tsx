import React from 'react';
import styled from 'styled-components';
import SearchIcon from "./icon/SearchIcon";

const SearchboxContainer = styled.div`
  background: #F6F4F5;
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid #C4C2C4;
  border-radius: 14px;
  margin-right: 32px;
  padding: 10px 18px;
`

const Input = styled.input`;
  height: 18px;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  color: #121417;


  ::placeholder {
    color: #C4C2C4;
  }

  :active {
    border: transparent;
  }
  
`

const Searchbox = () => {
    return (
        <SearchboxContainer>
            <SearchIcon />
            <Input placeholder="Поиск"></Input>
        </SearchboxContainer>
    );
};

export default Searchbox;