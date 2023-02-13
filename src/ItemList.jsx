import React from 'react';
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((itemMapped) =>(
                <LineItem
                    key={itemMapped.id}
                    itemMapped={itemMapped}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList