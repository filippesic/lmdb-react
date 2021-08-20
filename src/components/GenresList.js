import React from "react";
import {connect} from "react-redux";
import {fetchGenres} from "../actions";

class GenresList extends React.Component {
    componentDidMount() {
        this.props.fetchGenres();
    }

    renderGenres() {
        return this.props.genres.map(genre => {
            return (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            );
        })
    }

    render() {
        return (
            <div className="col">
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Select a genre</option>
                    {this.renderGenres()}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {genres: state.genres}
}

export default connect(mapStateToProps, {fetchGenres})(GenresList);