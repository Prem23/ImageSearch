import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search(props) {
    return (
        <div className="search-container">
            <input
                type="text"
                name="search"
                placeholder="Search for stock images, vectors and videos"
            />
            <button className="searchbtn" onClick={ev => props.handleSearch(ev)}>
                <FaSearch />
            </button>
        </div>
    )
}