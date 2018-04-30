import React from 'react';
import VideoListItem from './video_list_item';
// Example of a function comp
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        // Keys are added so react update the appropriate items 
        return (
        <VideoListItem  
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video} /> 
    );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};
export default VideoList; 

  
 