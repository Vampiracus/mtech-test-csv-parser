import React from 'react';
import Container from '../../components/Container/Container';
import parseCsv from './../../utils/csv-parser';
import { setDataInStorage } from '../../utils/localstorage';
import { Navigate } from 'react-router';
import FileInput from '../../components/FileInput/FileInput';

type Props = {
    setData: (p: Person[]) => void
    data: Person[] | null
}

const ChooseFile: React.FC<Props> = ({ setData, data }) => {
    const onFileSelected = (file: File) => {
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.onload = () => {
            if (reader.result === null) return;
            const text: string = reader.result as string;
            const data = parseCsv(text);
            setDataInStorage(data);
            setData(data);
        }
    }

    if (data && data.length !== 0) return <Navigate to='/table'/>;

    return (
        <Container>
            <p> Выбрите файл в формате CSV</p>
            <FileInput id='select-csv-file' onFileSelected={onFileSelected} accept='text/csv'/>
        </Container>
    );
};

export default ChooseFile;
