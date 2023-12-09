import React, { useEffect } from 'react';
import './Notification.scss';

type Props = {
    text: string
    setText: (s: string) => void
}

const Notification: React.FC<Props> = ({ text, setText }) => {
    useEffect(() => {
        let timer = 0;

        if (text !== '' && typeof text === 'string') {
            timer = (setTimeout(() => {
                setText('');
            }, 3900));
        }

        return () => {
            if (timer)
                clearTimeout(timer);
        };
    }, [text, setText]);

    if (text === '' || typeof text !== 'string') return <></>;
    
    return (
        <div className='notification' onClick={() => setText('')}>
            {text}
        </div>
    );
};

export default Notification;
