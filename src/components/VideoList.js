import React, {useEffect} from "react";
import {fetchVideos} from "../actions";
import {useDispatch, useSelector} from "react-redux";

const VideoList = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videos)

    useEffect(() => {
        dispatch(fetchVideos());
    },[dispatch])

    const shortenDescription = (description) => {
        return description.slice(0, 120).concat('...');
    }

    const renderVideos = (videos) => {
        if (videos.length) {
            return videos.map(video => {
                return (
                    <div key={video.id} className="card mt-5" style={{width: '15rem'}}>
                        <img src={video.poster} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{video.name}</h5>
                            <p className="card-text">{shortenDescription(video.plot)}</p>
                        </div>
                        <a href={`/videos/${video.id}`} className="btn btn-primary d-block mb-2">View</a>
                    </div>
                );
            })
        }
    }

    return (
        <div className="row text-center justify-content-center">{renderVideos(videos)}</div>
    )
}

export default VideoList;