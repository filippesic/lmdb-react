export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS':
            return action.payload.videos;
        case 'FETCH_VIDEO':
            return action.payload;
        case 'SEARCH_VIDEO':
            return action.payload.videos;
        default:
            return state;
    }
}