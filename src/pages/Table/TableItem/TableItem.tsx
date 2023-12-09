import React from 'react';
import './TableItem.scss';

type Props = {
    item: Record<string, string | number>,
    isLast?: boolean,
    isFirst: boolean,
}

const TableItem: React.FC<Props> = ({
    item,
    isLast, 
    isFirst,
}) => {
    if (!item) return <></>;
    return (
        <div 
            className={'table-item ' 
                + (isLast && 'table-item_last ' || '')
                + (isFirst && 'table-item_first ' || '')}
        >
            {Object.keys(item).map(key => (
                <div className='table-item__micro' key={key}>{item[key]}</div>
            ))}
        </div>
    );
};

export default TableItem;
