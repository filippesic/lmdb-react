import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres} from "../actions";

const GenresList = ({onGenreChange}) => {
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(fetchGenres());
    }, [])

    const renderGenres = (genres) => {
        return genres.map(genre =>
            <option key={genre.id} value={genre.id}>{genre.name}</option>
        )
    }

    return (
        <div className="col">
            <select onChange={e => onGenreChange(e.target.value)} className="form-select" aria-label="Default select example">
                <option defaultValue>Select a genre</option>
                {renderGenres(genres)}
            </select>
        </div>
    );
}

export default GenresList;