import React, {ReactNode} from "react";
import { useSelectContext } from "./SelectContext";
import styled from "styled-components";

interface SelectOptionsProps {
    isShow: boolean,
    value?: string
}

interface OptionProps {
    children: ReactNode | ReactNode[];
    value: string;
}

const OptionItem = styled.li.attrs<SelectOptionsProps>(props => ({
    value: props.value || 'button'
}))`
  list-style-type: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  :hover {
    background: #C6CCEC;
    color: #3454D1;
  }
  
  :active {
    background: #3454D1;
    color: #F6F4F5;
  }
`

export const Option: React.FC<OptionProps> = ({children, value}) => {
    const {changeSelectedOption, selectedOption} = useSelectContext();
    return (
        <OptionItem onClick={() => changeSelectedOption(value)} value={selectedOption}>
            {children}
        </OptionItem>
    );
};