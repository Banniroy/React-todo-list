import React from 'react';
import './Content.css';
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: '4rem', fontSize: '1.5rem' }}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content