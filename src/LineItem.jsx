import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({itemMapped, handleCheck, handleDelete}) => {
    return (
        <li className='item'>
            <input
                type="checkbox"
                checked={itemMapped.checked}
                onChange={() => handleCheck(itemMapped.id)}
            />
            <label
                style={(itemMapped.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(itemMapped.id)}
            >{itemMapped.item}</label>
            <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={() => handleDelete(itemMapped.id)}
                arial-label={`Delete ${itemMapped.item}`}
            />
        </li>
    )
}

export default LineItem