import React, {useEffect} from "react";
import {fetchVideo} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import '../responsiveiFrame.css'

const Video = (props) => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);

    useEffect(() => {
        const {id} = props.match.params;
        dispatch(fetchVideo(id));
    },[])

    const renderArtists = ({artists}) => {
        if (artists) {
            return artists.map(artist => {
                const {id, name, surname} = artist;
                return <p key={id}>{`${name} ${surname}`}</p>;
            })
        }
    };

    const renderGenres = ({genres}) => {
        if (genres) {
            return genres.map(artist => {
                const {id, name} = artist;
                return (
                    <p key={id} className="d-inline text-center mx-1">
                        {`${name} `}
                    </p>
                );
            })
        }
    };

    const renderTypes = ({type}) => {
        return type.map(type => {
            return (
                <span key={type}>{type.type}<i className="bi bi-dot"/></span>
            );
        })
    };

        if (videos.release_date) {
            return (
                <div className="card col-10 mx-auto my-5">
                    <div className="row g-0">
                        <div className="col-md-3 text-md-center text-end">
                            <img src={videos.poster} className="w-100 rounded-start" style={{ objectFit: 'contain' }} alt="..."/>
                            {renderGenres(videos)}
                            {/*<div className="col ms-2">{renderGenres(videos)}</div>*/}
                        </div>
                        <div className="col-md-8">
                            <div className="card-body pt-1">
                                <h5 className="card-title"><b className="fs-3">{videos.name}</b></h5>
                                <div className="row">
                                    <div className="col">
                                        {renderTypes(videos)}
                                        {videos.release_date.slice(-4)}
                                        <i className="bi bi-dot"/>
                                        {videos.mpaa_rating}
                                        <i className="bi bi-dot"/>
                                        {`${videos.duration_in_minutes} minutes`}
                                    </div>
                                </div>

                                <p className="card-text">{videos.plot}</p>

                                <hr/>

                                <div className="row">
                                    <h6>
                                        <b>Director</b> <span>{`${videos.director[0].name} ${videos.director[0].surname}`}</span>
                                    </h6>
                                </div>

                                <hr/>

                                <h6><b>Actors</b></h6>
                                {renderArtists(videos)}

                                <hr/>

                                <div className="row">
                                    <h6>
                                        <b>Country</b> <span>{videos.country}</span>
                                    </h6>
                                </div>

                                <div className="wrapper">
                                    <iframe src={videos.trailer} title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return <p className="text-center">Loading..</p>;
        }
    }

export default Video;