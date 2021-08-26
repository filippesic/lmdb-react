import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchVideos} from "../actions";

const NavbarSearch = () => {
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();

    const onSearchSubmit = (e) => {
        e.preventDefault();

        dispatch(searchVideos(searchInput));
    }

    return (
        <form onSubmit={e => onSearchSubmit(e)} className="d-flex">
            <input onChange={e => setSearchInput(e.target.value)} value={searchInput} className="form-control me-2"
                   placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}

export default NavbarSearch;