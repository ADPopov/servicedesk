import React, {FC} from 'react';
import TextWithIcon from "./TextWithIcon/TextWithIcon";

interface ButtonProps {
    icon?: JSX.Element;
    children?: string
}

const Button: FC<ButtonProps> = ({children, icon}) => {

    return (
        <div>
            {icon ?
                <TextWithIcon icon={icon}>{children}</TextWithIcon>
                :
                children
            }
        </div>
    );
};

export default Button;