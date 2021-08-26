import videos from "../apis/videos";
import history from "../history";

export const fetchVideo = (id) => async dispatch => {
    const res = await videos.get(`/videos/${id}`);

    dispatch({type: 'FETCH_VIDEO', payload: res.data});
}

export const fetchVideos = (query, genreId, artistId, offset = 0, limit = 20) => async dispatch => {
    const res = await videos.get(`/videos`, {
        params: {
            query,
            genreId,
            artistId,
            offset,
            limit
        }
    });

    dispatch({type: 'FETCH_VIDEOS', payload: res.data});

    history.push('/')
}

export const searchInput = (searchInput) => async dispatch => {
    dispatch({type: 'SEARCH_INPUT', payload: searchInput ?? null});
}

export const fetchGenres = () => async dispatch => {
    const res = await videos.get('/genres');

    dispatch({type: 'FETCH_GENRES', payload: res.data});
}

export const fetchArtists = () => async dispatch => {
    const res = await videos.get('/artists');

    dispatch({type: 'FETCH_ARTISTS', payload: res.data.data});
}



// /videos/search?query=tree&offset=0&limit=20&genreId=2&artistId=158

// https://lmdb.test/api/videos?offset=0&limit=2&query=tree&genreId=7