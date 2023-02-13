import React from 'react';
import './SearchItem.css';

const SearchItem = ({search, setSearch}) => {
    return (
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                id='search'
                placeholder='Search Items'
                role='searchbox'
                // value == current state of search
                value={search}
                // //   //  //  //  //
                onChange={(e) => setSearch(e.target.value)}
            />
        </form >
    )
}

export default SearchItem