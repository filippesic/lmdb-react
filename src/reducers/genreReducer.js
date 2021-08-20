export default (state = [], action) => {
    // console.log('action',action)
    switch (action.type) {
        case 'FETCH_GENRES':
            return action.payload;

        default:
            return state;
    }
}