import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {  //same as video = props.video

    const imageUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.channelTitle;

    //Pass callback function with the video in the video list item
    return (
        <li onClick={ ()=> onVideoSelect(video) }className="list-group-item">  
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl }/>
                </div>

                <div className="media-body">
                    <div className="media-heading"> { title } </div>
                </div>
            </div>
        </li>        
    );
}

export default VideoListItem;