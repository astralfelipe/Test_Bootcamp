import React from 'react'
import { useState } from 'react'

function SearchBar (props) {
    const { onSearch } = props;

    const [searchText, setSearchText] = useState('');

    const handelInput = (e) => {
        const text = e.target.value
        setSearchText(text);
    };

    const handelEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText);
        }
    }
  return (
    <div>
        <div className="control">
            <input className="input" onChange={handelInput} onKeyPress={handelEnterKeyPressed} type="text" value={searchText} placeholder="Search your product" />
        </div>
    </div>
  );
}


export default SearchBar;