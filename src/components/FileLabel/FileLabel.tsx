import React from 'react';
import './FileLabel.scss'

type Props = {
    htmlFor: string
}

const FileLabel: React.FC<React.PropsWithChildren<Props>> = ({ htmlFor, children }) => {
    return (
        <label className='file-label' htmlFor={htmlFor}>{children}</label>
    );
};

export default FileLabel;
