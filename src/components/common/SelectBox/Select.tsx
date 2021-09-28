import React, {ReactNode, useEffect, useRef, useState} from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import {SelectButton, SelectContainer, SelectOptions} from "./Select.styled";
import {SelectContext} from "./SelectContext";
import DiUnion from "../icon/DiUnion";
import DiArrow from "../icon/DiArrow";

interface SelectProps {
    children: ReactNode | ReactNode[];
    defaultValue?: string;
    placeholder?: string;
    onChange?: (selectedOption: string) => void;
}

export const Select: React.FC<SelectProps> = ({children, defaultValue, placeholder, onChange}) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue || "")
    const [showDropdown, setShowDropdown] = useState(false);
    const selectPlaceholder = placeholder || "Choose an option";
    const selectContainerRef = useRef(null);

    const clickOutsideHandler = () => setShowDropdown(false);
    const showDropdownHandler = () => setShowDropdown(!showDropdown);

    useOnClickOutside(selectContainerRef, clickOutsideHandler);

    const updateSelectedOption = (option: string) => {
        setSelectedOption(option);
        setShowDropdown(false);
    };

    useEffect(() => {
        if (onChange) {
            onChange(selectedOption)
        }
    }, [selectedOption])


    return (
        <SelectContext.Provider value={{selectedOption, changeSelectedOption: updateSelectedOption}}>
            <SelectContainer ref={selectContainerRef}>
                <SelectButton onClick={showDropdownHandler} isShow={showDropdown}>
                    <DiUnion/>
                    {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
                    <DiArrow/>
                </SelectButton>
                <SelectOptions isShow={showDropdown}>
                    <div>
                        {children}
                    </div>
                </SelectOptions>
            </SelectContainer>
        </SelectContext.Provider>
    )
}

