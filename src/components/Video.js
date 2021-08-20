import React from "react";
import {fetchVideo} from "../actions";
import {connect} from "react-redux";
import '../responsiveiFrame.css'

class Video extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;

        this.props.fetchVideo(id);
    }

    renderArtists() {
        if (this.props.videos.artists) {
            const {artists} = this.props.videos;
            return artists.map(artist => {
                const {id, name, surname} = artist;
                return (
                    <p key={id}>{`${name} ${surname}`}</p>
                );
            })
        }
    }

    renderGenres() {
        if (this.props.videos.genres) {
            const {genres} = this.props.videos;
            return genres.map(artist => {
                const {id, name} = artist;
                return (
                    <p key={id} className="d-inline">
                        <small className="text-muted">
                            {`${name} `}
                        </small>
                    </p>
                );
            })
        }
    }

    renderTypes() {
        return this.props.videos.type.map(type => {
            return (
                <span>
                    {type.type}<i className="bi bi-dot"/>
                </span>
            );
        })
    }

    render() {
        // console.log(this.props)
        if (this.props.videos.release_date) {
            return (
                <div className="card col-10 mx-auto my-5">
                    <div className="row g-0">
                        <div className="col-md-3">
                            <img src={this.props.videos.poster} className="img-fluid rounded-start" alt="..."/>
                            <div className="col ms-2">{this.renderGenres()}</div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body pt-1">
                                <h5 className="card-title">
                                    {this.props.videos.name}
                                </h5>

                                <div className="row">
                                    <div className="col">
                                        {this.renderTypes()}
                                        {this.props.videos.release_date.slice(-4)}
                                        <i className="bi bi-dot"/>
                                        {this.props.videos.mpaa_rating}
                                        <i className="bi bi-dot"/>
                                        {`${this.props.videos.duration_in_minutes} minutes`}
                                    </div>
                                </div>

                                <p className="card-text">{this.props.videos.plot}</p>
                                <hr/>

                                <div className="row">
                                    <h6>
                                        <b>Director</b> <span>{`${this.props.videos.director[0].name} ${this.props.videos.director[0].surname}`}</span>
                                    </h6>
                                </div>

                                <hr/>
                                <h6><b>Actors</b></h6>
                                {this.renderArtists()}
                                <hr/>

                                <div className="row">
                                    <h6>
                                        <b>Country</b> <span>{this.props.videos.country}</span>
                                    </h6>
                                </div>

                                <div className="wrapper">
                                    <iframe src={this.props.videos.trailer} title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <p className="text-center">Loading..</p>
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('ownProps',ownProps)
    // console.log('state',state)
    return {videos: state.videos};
}

export default connect(mapStateToProps, {fetchVideo})(Video);