import {combineReducers} from "redux";
import videoReducer from "./videoReducer";
import genreReducer from "./genreReducer";
import artistReducer from "./artistReducer";
import searchInputReducer from "./searchInputReducer";

export default combineReducers({
    videos: videoReducer,
    genres: genreReducer,
    artists: artistReducer,
    searchInput: searchInputReducer
});