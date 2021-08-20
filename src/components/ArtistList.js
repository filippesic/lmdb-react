import React from "react";
import {connect} from "react-redux";
import {fetchArtists} from "../actions";

class GenresList extends React.Component {
    componentDidMount() {
        this.props.fetchArtists();
    }

    renderArtists() {
        return this.props.artists.map(artist => {
            return (
                <option key={artist.id} value={artist.id}>{artist.name}</option>
            );
        })
    }

    render() {
        return (
            <div className="col">
                <select className="form-select" aria-label="Default select example">
                    <option defaultValue>Select an artist</option>
                    {this.renderArtists()}
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {artists: state.artists}
}

export default connect(mapStateToProps, {fetchArtists})(GenresList);