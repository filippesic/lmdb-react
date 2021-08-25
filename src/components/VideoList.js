import React from "react";
import {fetchVideos} from "../actions";
import {connect} from "react-redux";

class VideoList extends React.Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    shortenDescription(description) {
        return description.slice(0, 120).concat('...');
    }

    renderVideos() {
        if (this.props.videos.length) {
            return this.props.videos.map(video => {
                return (
                    <div key={video.id} className="card mt-5" style={{width: '15rem'}}>
                        <img src={video.poster} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{video.name}</h5>
                            <p className="card-text">{this.shortenDescription(video.plot)}</p>
                        </div>
                        <a href={`/videos/${video.id}`} className="btn btn-primary d-block mb-2">View</a>
                    </div>
                );
            })
        }
    }

    render() {
        // console.log('props',this.props)
        return (
            <div className="row text-center justify-content-center">
                {this.renderVideos()}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {videos: state.videos}
}

export default connect(mapStateToProps, {fetchVideos})(VideoList);