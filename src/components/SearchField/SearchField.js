import React, { useEffect, useState } from 'react';
import User from '../User/User';

const SearchField = () => {
    const [searchText, setSearchText] = useState('')
    const [users, setUsers] = useState([])


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.meals))
    }, [searchText])
    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }
    return (
        <div>
            <input onChange={handleSearchField} type="text" />
            <div>
                {
                    users.map(user => <User
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default SearchField;