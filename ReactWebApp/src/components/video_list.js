import React from 'react'
import VideoListItem from './video_list_item'

//props arrive as arguments to Functional component
const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
    return (
        <VideoListItem 
            onVideoSelect = { props.onVideoSelect }
            key= { video.etag } 
            video={ video } /> 
    ) //key property to uniquely identify each element in the list
    });

    return (

        <ul className="col-md-4 list-group">
            { videoItems }
        </ul>
    )
}

export default VideoList;