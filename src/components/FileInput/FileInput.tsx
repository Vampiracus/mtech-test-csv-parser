import React from 'react';
import FileLabel from '../FileLabel/FileLabel';
import Notification from '../Notification/Notification';

type Props = {
    id: string,
    accept: string
    onFileSelected: (file: File) => void
}

const FileInput: React.FC<Props> = ({ id, onFileSelected, accept }) => {
    const [notificationText, setNotificationText] = React.useState('');

    const onChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        if (file.type !== accept) {
            setNotificationText(`Неправильный формат файла, разрешены только файлы ${accept.split('/')[1]}`);
            return;
        }

        onFileSelected(file);
    }

    return (
        <>
            <Notification text={notificationText} setText={setNotificationText}/>
            <FileLabel htmlFor={id}>Выбрать файл</FileLabel>
            <input
                id={id}
                style={{display: 'none'}}
                type='file'
                accept={accept}
                onChange={onChosen}/>  
        </>
    );
};

export default FileInput;
