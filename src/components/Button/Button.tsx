import React from 'react';
import './button.scss'

type Props = {
    onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<React.PropsWithChildren<Props>> = ({ onClick, children }) => {
    return (
        <button className='button' onClick={onClick}>{children}</button>
    );
};

export default Button;
