export default (state = [], action) => {
    if(action.type === 'SEARCH_INPUT') {
        return action.payload
    } else {
        return state;
    }
}