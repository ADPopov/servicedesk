import {createContext, useContext} from "react";

interface ISelectContext {
    selectedOption: string;
    changeSelectedOption: (option: string) => void
}

const SelectContext = createContext<ISelectContext>({
    selectedOption: "",
    changeSelectedOption: (option: string) => {}
});

const useSelectContext = () => {
    const context = useContext(SelectContext);
    if(!context) {
        throw new Error("Error is creating the context");
    }
    return context
}

export {useSelectContext, SelectContext}