import videos from "../apis/videos";

export const fetchVideos = () => async dispatch => {
    const res = await videos.get('/videos', {
        params: {limit: 20}
    })

    dispatch({type: 'FETCH_VIDEOS', payload: res.data});
}

export const fetchVideo = (id) => async dispatch => {
    const res = await videos.get(`/videos/${id}`);

    dispatch({type: 'FETCH_VIDEO', payload: res.data});
}

export const fetchGenres = () => async dispatch => {
    const res = await videos.get('/genres');

    dispatch({type: 'FETCH_GENRES', payload: res.data});
}

export const fetchArtists = () => async dispatch => {
    const res = await videos.get('/artists');

    dispatch({type: 'FETCH_ARTISTS', payload: res.data.data});
}

export const searchVideos = (query, offset = 0, limit = 20) => async dispatch => {
    const res = await videos.get(`/videos/search?query=${query}&offset=${offset}&limit=${limit}`);

    dispatch({type: 'SEARCH_VIDEOS', payload: res.data});
}