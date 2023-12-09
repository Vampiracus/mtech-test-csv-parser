import React from 'react';
import Container from '../../components/Container/Container';
import TableItem from './TableItem/TableItem';
import './Table.scss';
import { Navigate } from 'react-router';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { setDataInStorage } from '../../utils/localstorage';

type Props = {
    setData: (p: Person[]) => void
    data: Person[]
}

const Table: React.FC<Props> = ({ data, setData }) => {
    if(!data || data.length === 0) return <Navigate to='/' />

    return (
        <>
            <Container class='table-content' outerClass='table-content__outer'>
                <Link to='/' id='select-new-data'>
                    <Button onClick={() => { setData([]); setDataInStorage([]); }}> Выбрать новый файл</Button>
                </Link>
                <TableItem isFirst isLast={data.length === 0} item={{
                    name: 'Имя',
                    phone: 'Номер телефона',
                    email: 'email',
                    bday: 'Дата рождения',
                    address: 'Адрес'
                }} />
                {
                    data.map((p, index) => (
                        <TableItem isFirst={false} isLast={index === data.length - 1} item={p} />
                    ))
                }
            </Container>
        </>
    );
};

export default Table;
