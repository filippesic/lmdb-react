import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchArtists} from "../actions";

const GenresList = () => {
    const dispatch = useDispatch();
    const artists = useSelector(state => state.artists);

    useEffect(() => {
        dispatch(fetchArtists());
    });

    const renderArtists = (artists) => {
        return artists.map(artist =>
            <option key={artist.id} value={artist.id}>{artist.name}</option>
        );
    };

    return (
        <div className="col">
            <select className="form-select" aria-label="Default select example">
                <option defaultValue>Select an artist</option>
                {renderArtists(artists)}
            </select>
        </div>
    );
}

export default GenresList;