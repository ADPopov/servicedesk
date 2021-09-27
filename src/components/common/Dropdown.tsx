import React, {useState} from 'react';
import DiUnion from "./icon/DiUnion";
import DiArrow from "./icon/DiArrow";
import styled from "styled-components";
import {H4} from "./styles/typography/Headline.styled";

const CustomDropdown = styled.div`
  width: 232px;
`

const DropdownButton = styled.div`
  background-color: #3454D1;
  width: 204px;
  height: 24px;
  cursor: pointer;
  box-shadow: 0 6px 12px -6px rgba(18, 20, 23, 0.12), 0px 8px 24px -4px rgba(18, 20, 23, 0.08);
  border-radius: 12px;
  padding: 8px 12px 8px 16px;

  :hover {
    background: #657CDA;
  }
`

const DropdownContent = styled.div`
  background: #F6F4F5;
  position: absolute;
  margin-top: 7px;
  box-shadow: 0 6px 14px -6px rgba(18, 20, 23, 0.12), 0px 10px 32px -4px rgba(18, 20, 23, 0.1);
  border-radius: 16px;
  padding: 8px 12px;
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  padding: 0 8px;
  font-weight: 400;
  font-size: 14px;
  position: relative;

  :hover {
    background-color: #C6CCEC;
    color: #3454D1;
  }

  :active {
    background-color: #3454D1;
    color: #F6F4F5;
  }

  :last-child {
    margin-bottom: 0;
  }
`

const DropdownText = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  justify-items: center;
  padding: 4px 10px 4px 2px;
`

const Title = styled(H4)`
  color: #F6F4F5;
  padding: 3px 0px 3px 0;
`

const Arrow = styled.div`
  margin-right: 0;
  margin-left: auto;
`

const Dropdown = () => {

    const options = ["По дате появления", "По алфавиту", "Еще по чему нибудь"];
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [currentItem, setCurrentItem] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        console.log(selectedOption);
    };

    return (
        <CustomDropdown>
            <DropdownButton onClick={toggling}>
                <DropdownText>
                    <Icon><DiUnion/></Icon>
                    <Title onClick={toggling}>
                        {selectedOption || "По дате появления"}
                    </Title>
                    <Arrow><DiArrow/></Arrow>
                </DropdownText>
            </DropdownButton>
            {isOpen && (
                <DropdownContent>
                    {options.map(option => (
                        <DropdownItem onClick={onOptionClicked(option)} key={Math.random()}>
                            {option}
                        </DropdownItem>
                    ))}
                </DropdownContent>
            )}
        </CustomDropdown>
    );
};

export default Dropdown;