import React from "react";
import GenresList from "./GenresList";
import ArtistList from "./ArtistList";
import {searchVideo} from "../actions";
import {connect} from "react-redux";

class Search extends React.Component {
    state = {searchTerm: ''}

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.searchVideo(this.state.searchTerm)
    }

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        // console.log(this.props)
        return (
            <div className="col-7 mx-auto" style={{marginTop: '7%'}}>
                <form onSubmit={this.onFormSubmit}>
                    <input className="form-control me-2" type="search" placeholder="Search" value={this.state.searchTerm}
                           onChange={this.onInputChange} aria-label="Search"/>
                    <button className="btn btn-outline-success w-100 my-2" type="submit">Search</button>
                    <div className="row">
                        <GenresList />
                        <ArtistList />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('penzionisan', state.videos)
    return {videos: state.videos}
}

export default connect(mapStateToProps, {searchVideo})(Search);